import React from "react";
import { Route, Routes, Navigate} from 'react-router-dom';
import ProtectedRoute from "./protected-route";

const ProductsPage = React.lazy(() => import('@features/products/pages/ProductsPage/products-page'));
const LoginPage = React.lazy(() => import('@features/auth/login-page'));
const NewProductPage = React.lazy(() => import('@features/products/pages/NewProductPage/new-product-page'));
const ProductDetailPage = React.lazy(() => import('@features/products/components/product-detail/product-detail'))
const NotFoundPage = React.lazy(() => import('@features/not-found/not-found-page'))

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
            <Route path="/404" element={<NotFoundPage />}/>
            <Route path="*" element={<NotFoundPage />}/>
        </Routes>
    )


}

export default Router