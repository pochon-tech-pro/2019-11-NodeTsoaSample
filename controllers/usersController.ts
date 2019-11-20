import { Body, Controller, Get, Header, Path, Post, Query, Route, SuccessResponse } from 'tsoa'
import { User, RequestBody } from '../models/user'
import { getUser, createUser } from '../services/userService';
 
@Route('users')
export class UsersController extends Controller {
  @Get('/get/{id}')
  public getUser(id: number): User {
    return getUser(id)
  }

  @Post('/create')
  public createUser(@Body() requestBody: RequestBody): string {
    createUser(requestBody)
    return 'success'
  }
}