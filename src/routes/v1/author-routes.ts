import ExpressConfig from '../../configs/express';
import { AuthorController } from '../../controllers';

const controller = AuthorController.getInstance();
const { router } = ExpressConfig.getInstance();

router.post('/', controller.create).get('/', controller.authorList).get('/:id', controller.findOne);

export default router;
