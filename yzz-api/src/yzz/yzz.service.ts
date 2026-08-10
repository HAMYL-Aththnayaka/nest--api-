import { Injectable } from '@nestjs/common';
import { CreateYzzDto } from './dto/create-yzz.dto'
import { UpdateUserDto } from '../users/dto/update-user.dto';


@Injectable()
export class YzzService {
    private yzz_users = [
        {
            id: 1,
            name: "user_1",
            tool: "ms-word"
        },
        {
            id: 2,
            name: "user_2",
            tool: "ms-powerPoint"
        }
    ];

    getYusers(tool?: "ms-word" | "ms-powerPoint") {
        if (tool) {
            return this.yzz_users.filter((user) => user.tool === tool);
        }
        return this.yzz_users;
    }

    getYuserId(id?: number) {
        if (id) {
            return this.yzz_users.filter((user) => user.id === id);
        }
        else {
            throw new Error("user not found Invalid User id")
        }
    }
    createUser(createUserDto: CreateYzzDto) {
        const newUser = {
            ...createUserDto,
            id: Date.now(),
        }
        this.yzz_users.push(newUser)
    }

    updateUser(id: number, updateUserDto: UpdateUserDto) {
        const index = this.yzz_users.findIndex((u) => u.id === id);

        if (index === -1) {
            throw new Error(`User with ID ${id} not found`);
        }

        this.yzz_users[index] = {
            ...this.yzz_users[index],
            ...updateUserDto,
            id // ensures ID cannot be accidentally overwritten
        };

        return this.yzz_users[index];
    }
    removeUser(id: number) {
        const removedUser = this.getYuserId(id)
        this.yzz_users = this.yzz_users.filter((user) => user.id !== id);
        return this.yzz_users;
    }
}
