import {Document} from 'mongoose'

export interface Cart extends Document {
    readonly name: string;
    readonly age: number;
    readonly breed: string;
}