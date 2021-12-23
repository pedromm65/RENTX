import { Category } from "../model/Category";
import {
    ICategoriesRepository,
    ICreateCategoryDTO,
} from "./ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
    private categoires: Category[];

    constructor() {
        this.categoires = [];
    }

    create({ description, name }: ICreateCategoryDTO): void {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });

        this.categoires.push(category);
    }

    list(): Category[] {
        return this.categoires;
    }

    findByName(name: string): Category {
        const category = this.categoires.find(
            (category) => category.name === name
        );
        return category;
    }
}

export { CategoriesRepository };