import { Categories, Questions } from "../../models/Home"
import { GET_CATEGORIES, GET_QUESTONS } from "./Constants"

export default class HomeAPI {
    async getQuestions(): Promise<Questions> {
        let questions: Questions
        await fetch(GET_QUESTONS, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => response.json())
            .then(result => {
                questions = result
            })
            .catch(_ => {})

        return questions!
    }

    async getCategories(): Promise<Categories> {
        let categories: Categories

        await fetch(GET_CATEGORIES, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => response.json())
            .then(result => {
                categories = result
            })
            .catch(_ => {})

        return categories!
    }
}
