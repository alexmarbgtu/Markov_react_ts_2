
import { v4 as uuid } from "uuid"
import { motion } from "motion/react";
import Layout from "../../components/Layout/Layout"


import Styles from './Main.module.css'
import { triangle } from "../../components/MainFigure/Figure1";
import { circle } from "../../components/MainFigure/Figure2";
import { reactAnime } from "../../components/MainFigure/Figure3";
import { motion4 } from "../../components/MainFigure/Figure4";

const Main = () => {

  const cards = [
		{
			id: uuid(),
			title: 'Джон Резиг',
			body: 'Веб-разработка - это непрерывное стремление к совершенству. Всегда есть что улучшить и новое для изучения',
			figure: triangle,
		},
		{
			id: uuid(),
			title: 'Крис Койер',
			body: 'Веб-разработка - это сочетание творчества и технической экспертизы, где каждая строка кода может создать новый мир',
			figure: circle,
		},
		{
			id: uuid(),
			title: 'Марк Андриссен',
			body: 'Веб-разработчик - это как скульптор, который вырезает блок мрамора в уникальную и прекрасную форму',
			figure: reactAnime,
		},
		{
			id: uuid(),
			title: 'Дейв Шерман',
			body: 'Веб-разработка - это игра, в которой каждая строчка кода - это шаг к победе над ограничениями и созданию новых возможностей',
			figure: motion4,
		},
	]
  const cardVariants = {

    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: (i + 0.5) * 0.5,
        duration: 0.7
      }
    }),
    hidden: {
      opacity: 0
    },
  }

  return (
		<>
			<Layout className={Styles.main}>
				<div className={Styles.container}>
					{cards.map((itm, i) => (
						<motion.div
							key={itm.id}
							className={Styles.card}
							variants={cardVariants}
							initial={'hidden'}
							animate={'visible'}
							custom={i}
						>
							<div className={Styles.cardFigure}>{itm.figure}</div>
							<div className={Styles.cardMain}>
								<h2 className={Styles.cardTitle}>{itm.title}</h2>
								<p>{itm.body}</p>
							</div>
						</motion.div>
					))}
				</div>
			</Layout>
		</>
	)
}

export default Main
