import { Document} from "mongoose"

export  interface PostALL extends Document {
    description : {
        type: string,
        required: false,
    },
    channel: {
        type: string,
        required: false,
    },
}

