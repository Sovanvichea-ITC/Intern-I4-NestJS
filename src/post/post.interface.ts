import { Document} from "mongoose"

export  interface PostALL extends Document {
    description :string;
    channel: string;
}

export  interface PostByID extends Document {
    _id: string;
}