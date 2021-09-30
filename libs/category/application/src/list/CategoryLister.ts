import { CategoryNotFound, CategoryName, CategoryRepository } from "@frappe/category/domain";

interface Props {
    readonly categoryRepository: CategoryRepository
}

export class CategoryLister {
    private readonly categoryRepository: CategoryRepository;

    constructor({ categoryRepository }: Props) {
        this.categoryRepository = categoryRepository;
    }

    async execute() {
        const categories = await this.categoryRepository.all();

        return categories.map((cat) => cat.toPrimitives())
    }
}