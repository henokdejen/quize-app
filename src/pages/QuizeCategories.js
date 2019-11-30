import React from 'react'
import { PageHeader, Typography } from 'antd';
import QuizeCategory from '../Components/QuizeGeneralInfo/QuizeCategory';

const {Title} = Typography;
function QuizzeCategoriesListPage(props) {
    const imgUrl = "https://i.udemycdn.com/course/480x270/1362070_b9a1_2.jpg"

    return (
        <div>

            <PageHeader
                style={{
                    border: '1px solid rgb(235, 237, 240)',
                }}
                title="Henok Quizzes"
            />
            <div className="quizzes-list-wrapper">
                <Title level = {4}>15 Quizes</Title>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map(element =>
                        <QuizeCategory
                            title={"Chemistry Quize " + element}
                            key={element}
                            numberOfQuizes ={23}
                            imageUrl={imgUrl}
                            className="quize-card-wrapper"
                        />

                    )
                }

            </div>
        </div>

    )
}

export default QuizzeCategoriesListPage

