import { Body, Controller, Get, Param, Post,ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from '../dtos/createUser.dto';

@Controller('users')
export class UsersController {
    @Get()
    getusers(){
        return [
            {name:"Haggai", age:24,status:"singale"},
            {name:"Haggai", age:24,status:"singale"},
            {name:"Haggai", age:24,status:"singale"},
        ]
    }

    @Get('oneUser')
    getOneUser(){
        return  ({name:"David", age:24,status:"singale"})
    }

    @Post('create')

    createUser(@Body() userData:CreateUserDto){
        console.log(userData);
        return ("sucess createfull")
    }

    //route params
    @Get(':name/:age')
    UseNameAndAgeParams(@Param('name') name:string,@Param('age',ParseIntPipe) age:number){
        console.log(name,age);
        return{"name":name , "age":age}
    }


}
