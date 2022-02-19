import { getRepository, Repository } from "typeorm";

import { ICarsImagesRepository } from "@modules/cars/repositories/ICarsImageRepository";

import { CarImages } from "../entities/CarImages";

class CarsImagesRepository implements ICarsImagesRepository {
    private repository: Repository<CarImages>;

    constructor() {
        this.repository = getRepository(CarImages);
    }

    async create(car_id: string, image_name: string): Promise<CarImages> {
        const CarImages = this.repository.create({
            car_id,
            image_name,
        });

        await this.repository.save(CarImages);

        return CarImages;
    }
}

export { CarsImagesRepository };
