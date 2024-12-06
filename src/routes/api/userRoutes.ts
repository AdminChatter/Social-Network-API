import { Router } from "express";

const router = Router();

import {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} from "../../controllers/userController.js";

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);
router.route("/:id/friend").put(addFriend);
router.route("/:id/friend/:friendId").delete(deleteFriend);

export { router as usersRoutes };
