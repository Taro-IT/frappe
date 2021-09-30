import classes from './CategoryList.module.scss';
import { Card } from '@frappe/common/design-system';


const CategoryList = props => {
    return <Card className={classes.categories}>
        <ul>
            {props.categories.map(category => (
                <li key={category.id}>
                    {category.name}
                </li>
            ))}
        </ul>
    </Card>
};

export default CategoryList;