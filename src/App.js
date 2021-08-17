import React, { useState } from 'react';
import GaugeChart from 'react-gauge-chart';

export default function App() {
	const totalScore = 40;
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'Never', answerScore: 0 },
				{ answerText: 'Almost Never', answerScore: 1 },
				{ answerText: 'Sometimes', answerScore: 2 },
				{ answerText: 'Fairly Often', answerScore: 3 },
				{ answerText: 'Very Often', answerScore: 4 },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Never', answerScore: 0 },
				{ answerText: 'Almost Never', answerScore: 1 },
				{ answerText: 'Sometimes', answerScore: 2 },
				{ answerText: 'Fairly Often', answerScore: 3 },
				{ answerText: 'Very Often', answerScore: 4 },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Never', answerScore: 0 },
				{ answerText: 'Almost Never', answerScore: 1 },
				{ answerText: 'Sometimes', answerScore: 2 },
				{ answerText: 'Fairly Often', answerScore: 3 },
				{ answerText: 'Very Often', answerScore: 4 },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: 'Never', answerScore: 0 },
				{ answerText: 'Almost Never', answerScore: 1 },
				{ answerText: 'Sometimes', answerScore: 2 },
				{ answerText: 'Fairly Often', answerScore: 3 },
				{ answerText: 'Very Often', answerScore: 4 },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: 'Never', answerScore: 0 },
				{ answerText: 'Almost Never', answerScore: 1 },
				{ answerText: 'Sometimes', answerScore: 2 },
				{ answerText: 'Fairly Often', answerScore: 3 },
				{ answerText: 'Very Often', answerScore: 4 },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (answerScore) => {
		setScore(score + answerScore);

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					<span>You scored {score} out of {totalScore}</span>
					<GaugeChart id="gauge-chart2" 
						nrOfLevels={10}
						percent={score/100}
						formatTextValue={(value) => `${value}/${totalScore}`}
					/>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.answerScore)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
