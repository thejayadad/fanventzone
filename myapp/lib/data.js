import db from "./db";
import Workout from "@/models/Workout";
import getServerUser from "./getServerUser";

export const getWorkout = async () => {
    const user = await getServerUser()
    const userEmail = user.email
    console.log("Email " + userEmail)
    try {
        db.connect()
        const post = await Workout.find({creator: userEmail})
        return post
    } catch (error) {
        throw new Error("Failed to fetch Post! " + error);
 
    }
}