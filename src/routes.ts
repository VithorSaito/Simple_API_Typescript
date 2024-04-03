import { Router } from 'express';
import UserRouter from '@modules/User/Router';
import ProductRouter from '@modules/Product/Router';
import OrderRouter from '@modules/Order/Router';

class Routes {
    static define(router: Router): Router {
        router.use('/users', UserRouter);
        router.use('/products', ProductRouter);
        router.use('/orders', OrderRouter);

        return router;
    }
}

export default Routes.define(Router());