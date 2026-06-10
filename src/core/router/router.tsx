import React from "react";
import { Route, Routes, Navigate} from 'react-router-dom';
import ProtectedRoute from "./protected-route";

const ProductsPage = React.lazy(() => import('@features/products/products-page'));
const LoginPage = React.lazy(() => import('@features/auth/login-page'));
const NewProductPage = React.lazy(() => import('@features/products/components/product-form/product-form'));
const ProductDetailPage = React.lazy(() => import('@features/products/components/product-detail/product-detail'))

const Router: React.FC = () => {
    return  (
        <Routes>
            <Route 
                path="/"
                element={<Navigate to="/products" replace />}
            />
            <Route
                path="/products"
                element={
                    <ProtectedRoute>
                        <React.Suspense fallback={<p>Loading...</p>}>
                            <ProductsPage />
                        </React.Suspense>
                    </ProtectedRoute>
                }
            />
            
            <Route
                path="/login"
                element={
                        <React.Suspense fallback={<p>Loading...</p>}>
                            <LoginPage />
                        </React.Suspense>
                }
            />
            <Route
                path="/products/new"
                element={
                    <ProtectedRoute>
                        <React.Suspense fallback={<p>Loading...</p>}>
                            <NewProductPage />
                        </React.Suspense>
                    </ProtectedRoute>
                }
            />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="*" element={<h1>404 Not Found</h1>}/>
        </Routes>
    )


}

export default Router