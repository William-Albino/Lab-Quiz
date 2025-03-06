import React, { useState, useEffect } from 'react';
import { Timer, BarChart, CheckCircle, XCircle, Award, ChevronRight, Home, Coins, X } from 'lucide-react';
import { questions } from './data/questions';
import './App.css';

function App() {
  const [gameState, setGameState] = useState<'start' | 'playing' | 'level-complete' | 'game-complete'>('start');
  const [currentLevel, setCurrentLevel] = useState<number>(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(20);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const levels = ['Fácil', 'Medio', 'Difícil'];
  const levelQuestions = questions.filter(q => q.level === currentLevel);
  const currentQuestion = levelQuestions[currentQuestionIndex];
  
  // Timer effect
  useEffect(() => {
    if (gameState !== 'playing' || showFeedback) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleAnswer(-1); // Time's up
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [gameState, showFeedback]);
  
  // Reset timer when moving to next question
  useEffect(() => {
    if (gameState === 'playing') {
      setTimeLeft(20);
    }
  }, [currentQuestionIndex, currentLevel, gameState]);

  const startGame = () => {
    setGameState('playing');
    setCurrentLevel(0);
    setCurrentQuestionIndex(0);
    setScore(0);
    setTimeLeft(20);
  };

  const handleAnswer = (optionIndex: number) => {
    if (showFeedback) return;
    
    const isAnswerCorrect = optionIndex === currentQuestion.correctAnswer;
    
    if (isAnswerCorrect) {
      setScore(prev => prev + 1);
    }
    
    setSelectedOption(optionIndex);
    setIsCorrect(isAnswerCorrect);
    setShowFeedback(true);
    
    // Move to next question or level after 2 seconds
    setTimeout(() => {
      setShowFeedback(false);
      setSelectedOption(null);
      
      if (currentQuestionIndex < levelQuestions.length - 1) {
        // Move to next question
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        // Level complete
        if (currentLevel < 2) {
          setGameState('level-complete');
        } else {
          setGameState('game-complete');
        }
      }
    }, 2000);
  };

  const moveToNextLevel = () => {
    setCurrentLevel(prev => prev + 1);
    setCurrentQuestionIndex(0);
    setGameState('playing');
  };

  const resetGame = () => {
    setGameState('start');
    setCurrentLevel(0);
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  // Calculate progress percentage
  const levelProgress = ((currentQuestionIndex) / levelQuestions.length) * 100;
  const overallProgress = ((currentLevel * 10 + currentQuestionIndex) / 30) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4f0b9e] to-[#291549] text-white flex flex-col items-center justify-center p-4 relative">
      <div className="fixed top-4 left-4 flex items-center text-xl font-bold animate-slide-in">
        <Coins className="w-8 h-8 mr-2 text-[#b388ff] animate-pulse-slow" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b388ff] to-[#7c4dff]">
          Cx Cripto Lab
        </span>
      </div>

      {gameState === 'start' && (
        <div className="glass-morphism rounded-xl p-8 max-w-md w-full text-center animate-fade-in">
          <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#b388ff] to-[#7c4dff] animate-pulse-slow">
            Quiz de Criptomonedas
          </h1>
          <p className="mb-4 text-lg">
            Bienvenido al laboratorio de conocimientos cripto de Cx Cripto Lab
          </p>
          <p className="mb-8 text-lg opacity-90">
            Demuestra tu experiencia en el mundo de las criptomonedas con nuestro desafiante quiz de 30 preguntas.
          </p>
          <button
            onClick={startGame}
            className="bg-gradient-to-r from-[#b388ff] to-[#7c4dff] text-white font-bold py-3 px-8 rounded-full text-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
          >
            ¡Comenzar el Desafío!
          </button>
        </div>
      )}

      {gameState === 'playing' && (
        <div className="glass-morphism rounded-xl p-8 max-w-2xl w-full animate-fade-in relative">
          <div className="absolute top-0 right-0 mt-2 mr-2">
            <button
              onClick={resetGame}
              className="p-2 rounded-full hover:bg-[#4f0b9e]/50 transition-all group"
              title="Cerrar quiz"
            >
              <X className="w-6 h-6 group-hover:text-[#b388ff] transition-colors" />
            </button>
          </div>

          <div className="flex justify-between items-center mb-6 mt-4">
            <div className="glass-morphism rounded-lg px-4 py-2 flex items-center">
              <Award className="mr-2 h-5 w-5 text-[#b388ff]" />
              <span className="font-semibold">{score} pts</span>
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#b388ff] to-[#7c4dff]">
                Nivel: {levels[currentLevel]}
              </h2>
            </div>
            <div className="glass-morphism rounded-lg px-4 py-2 flex items-center">
              <Timer className={`mr-2 h-5 w-5 ${timeLeft <= 5 ? 'text-red-400 timer-warning' : 'text-[#b388ff]'}`} />
              <span className="font-semibold">{timeLeft}s</span>
            </div>
          </div>
          
          <div className="mb-3">
            <div className="flex justify-between text-sm mb-2">
              <span>Progreso del nivel</span>
              <span className="font-semibold">{currentQuestionIndex + 1}/{levelQuestions.length}</span>
            </div>
            <div className="w-full bg-[#4f0b9e]/30 rounded-full h-2.5">
              <div 
                className="bg-gradient-to-r from-[#b388ff] to-[#7c4dff] h-2.5 rounded-full transition-all duration-700"
                style={{ width: `${levelProgress}%` }}
              ></div>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-2">
              <span>Progreso total</span>
              <span className="font-semibold">{currentLevel * 10 + currentQuestionIndex + 1}/30</span>
            </div>
            <div className="w-full bg-[#4f0b9e]/30 rounded-full h-2.5">
              <div 
                className="bg-gradient-to-r from-[#b388ff] to-[#7c4dff] h-2.5 rounded-full transition-all duration-700"
                style={{ width: `${overallProgress}%` }}
              ></div>
            </div>
          </div>
          
          <div className="glass-morphism rounded-xl p-6 mb-6">
            <h3 className="text-xl font-medium mb-3">Pregunta {currentQuestionIndex + 1}</h3>
            <p className="text-lg leading-relaxed">{currentQuestion.question}</p>
          </div>
          
          <div className="grid grid-cols-1 gap-3 mb-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={showFeedback}
                className={`option-hover text-left p-4 rounded-lg ${
                  selectedOption === index 
                    ? isCorrect 
                      ? 'bg-green-500/70' 
                      : 'bg-red-500/70'
                    : showFeedback && index === currentQuestion.correctAnswer
                      ? 'bg-green-500/70'
                      : 'glass-morphism'
                }`}
              >
                <div className="flex items-center">
                  {showFeedback && (
                    <>
                      {index === currentQuestion.correctAnswer ? (
                        <CheckCircle className="mr-3 h-5 w-5 text-green-300 animate-fade-in" />
                      ) : selectedOption === index ? (
                        <XCircle className="mr-3 h-5 w-5 text-red-300 animate-fade-in" />
                      ) : null}
                    </>
                  )}
                  <span className="font-medium">{option}</span>
                </div>
              </button>
            ))}
          </div>
          
          {showFeedback && (
            <div className={`text-center p-4 rounded-lg mb-4 animate-fade-in ${
              isCorrect ? 'glass-morphism bg-green-500/10' : 'glass-morphism bg-red-500/10'
            }`}>
              {isCorrect ? (
                <p className="font-medium">¡Correcto! ¡Excelente respuesta!</p>
              ) : (
                <p className="font-medium">Incorrecto. La respuesta correcta era: {currentQuestion.options[currentQuestion.correctAnswer]}</p>
              )}
            </div>
          )}
          
          <div className="w-full bg-[#4f0b9e]/30 rounded-full h-1.5 mt-6">
            <div 
              className={`h-1.5 rounded-full transition-all duration-1000 ${
                timeLeft > 10 ? 'bg-[#b388ff]' : timeLeft > 5 ? 'bg-[#7c4dff]' : 'bg-red-500 timer-warning'
              }`}
              style={{ width: `${(timeLeft / 20) * 100}%` }}
            ></div>
          </div>
        </div>
      )}

      {gameState === 'level-complete' && (
        <div className="glass-morphism rounded-xl p-8 max-w-md w-full text-center animate-fade-in">
          <div className="mb-6">
            <Award className="h-16 w-16 text-[#b388ff] mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2">¡Nivel Completado!</h2>
            <p className="text-xl mb-4">Has completado el nivel {levels[currentLevel]}</p>
            <p className="text-lg">Puntuación actual: {score} / {(currentLevel + 1) * 10}</p>
          </div>
          <button
            onClick={moveToNextLevel}
            className="bg-gradient-to-r from-[#b388ff] to-[#7c4dff] text-white font-bold py-3 px-6 rounded-full text-lg hover:opacity-90 transition-all transform hover:scale-105 flex items-center mx-auto"
          >
            Siguiente Nivel <ChevronRight className="ml-1" />
          </button>
        </div>
      )}

      {gameState === 'game-complete' && (
        <div className="glass-morphism rounded-xl p-8 max-w-md w-full text-center animate-fade-in">
          <div className="mb-6">
            <Award className="h-16 w-16 text-[#b388ff] mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2">¡Felicidades!</h2>
            <p className="text-xl mb-4">Has completado el Quiz de Criptomonedas</p>
            <p className="text-lg mb-2">Puntuación final: {score} / 30</p>
            <p className="text-md">
              {score >= 25 ? '¡Eres un experto en criptomonedas!' : 
               score >= 15 ? '¡Buen conocimiento sobre criptomonedas!' : 
               '¡Sigue aprendiendo sobre el mundo cripto!'}
            </p>
          </div>
          <button
            onClick={resetGame}
            className="bg-gradient-to-r from-[#b388ff] to-[#7c4dff] text-white font-bold py-3 px-6 rounded-full text-lg hover:opacity-90 transition-all transform hover:scale-105 flex items-center mx-auto"
          >
            <Home className="mr-1" /> Volver al Inicio
          </button>
        </div>
      )}
    </div>
  );
}

export default App;