// src/pages/MentalMath.tsx
import React, { useState, useEffect, useCallback, useRef } from 'react';
import '../assets/css/MentalMath.css';

type GameMode = 'addition' | 'subtraction' | 'multiplication' | 'division';
type InputMode = 'multiple-choice' | 'type-answer';

interface Question {
  text: string;
  correct: number;
  options?: number[];
  operation: GameMode;
}

interface GameStats {
  score: number;
  totalQuestions: number;
  streak: number;
  maxStreak: number;
}

interface GameSettings {
  inputMode: InputMode;
  enabledModes: Set<GameMode>;
  ranges: {
    addition: { min1: number; max1: number; min2: number; max2: number };
    subtraction: { min1: number; max1: number; min2: number; max2: number };
    multiplication: { min1: number; max1: number; min2: number; max2: number };
    division: { min1: number; max1: number; min2: number; max2: number };
  };
}

const MentalMath: React.FC = () => {
  const [settings, setSettings] = useState<GameSettings>({
    inputMode: 'type-answer',
    enabledModes: new Set(['addition', 'subtraction', 'multiplication', 'division']),
    ranges: {
      addition: { min1: 1, max1: 100, min2: 1, max2: 100 },
      subtraction: { min1: 1, max1: 100, min2: 1, max2: 100 },
      multiplication: { min1: 1, max1: 12, min2: 1, max2: 100 },
      division: { min1: 1, max1: 12, min2: 1, max2: 100 }
    }
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [stats, setStats] = useState<GameStats>({
    score: 0,
    totalQuestions: 0,
    streak: 0,
    maxStreak: 0
  });
  const [userAnswer, setUserAnswer] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Generate random number in range
  const randomBetween = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Generate distractors for multiple choice
  const generateDistractors = (correct: number): number[] => {
    const distractors = new Set<number>();
    distractors.add(correct);

    while (distractors.size < 4) {
      const variance = Math.max(1, Math.floor(Math.abs(correct) * 0.3));
      const distractor = correct + randomBetween(-variance, variance);
      if (distractor !== correct && distractor >= 0) {
        distractors.add(distractor);
      }
    }

    return Array.from(distractors).sort(() => Math.random() - 0.5);
  };

  // Generate a new question
  const generateQuestion = useCallback((): Question => {
    const enabledModes = Array.from(settings.enabledModes);
    if (enabledModes.length === 0) return { text: '', correct: 0, operation: 'addition' };
    
    const selectedMode = enabledModes[Math.floor(Math.random() * enabledModes.length)];
    const range = settings.ranges[selectedMode];

    let a: number, b: number, correct: number, text: string;

    switch (selectedMode) {
      case 'addition':
        a = randomBetween(range.min1, range.max1);
        b = randomBetween(range.min2, range.max2);
        correct = a + b;
        text = `${a} + ${b}`;
        break;

      case 'subtraction':
        a = randomBetween(range.min1, range.max1);
        b = randomBetween(range.min2, Math.min(range.max2, a)); // Ensure non-negative
        correct = a - b;
        text = `${a} - ${b}`;
        break;

      case 'multiplication':
        a = randomBetween(range.min1, range.max1);
        b = randomBetween(range.min2, range.max2);
        correct = a * b;
        text = `${a} × ${b}`;
        break;

      case 'division':
        b = randomBetween(range.min1, range.max1);
        correct = randomBetween(range.min2, range.max2);
        a = b * correct; // Ensure integer division
        text = `${a} ÷ ${b}`;
        break;

      default:
        throw new Error('Invalid mode');
    }

    const options = settings.inputMode === 'multiple-choice' ? generateDistractors(correct) : undefined;

    return { text, correct, options, operation: selectedMode };
  }, [settings]);

  // Start the game
  const startGame = () => {
    if (settings.enabledModes.size === 0) {
      alert('Please enable at least one operation type!');
      return;
    }
    setIsPlaying(true);
    setTimeLeft(120);
    setStats({ score: 0, totalQuestions: 0, streak: 0, maxStreak: 0 });
    setCurrentQuestion(generateQuestion());
    setUserAnswer('');
    setShowSettings(false);
  };

  // End the game
  const endGame = () => {
    setIsPlaying(false);
    setCurrentQuestion(null);
  };

  // Handle answer submission
  const submitAnswer = (answer: number) => {
    if (!currentQuestion || !isPlaying) return;

    const isCorrect = answer === currentQuestion.correct;
    
    setStats(prev => ({
      score: prev.score + (isCorrect ? 1 : 0),
      totalQuestions: prev.totalQuestions + 1,
      streak: isCorrect ? prev.streak + 1 : 0,
      maxStreak: isCorrect ? Math.max(prev.maxStreak, prev.streak + 1) : prev.maxStreak
    }));

    // Generate next question immediately
    setCurrentQuestion(generateQuestion());
    setUserAnswer('');
    
    // Focus input for type-answer mode
    if (settings.inputMode === 'type-answer' && inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Handle multiple choice click
  const handleMultipleChoice = (answer: number) => {
    submitAnswer(answer);
  };

  // Handle type answer submission
  const handleTypeAnswer = (e: React.FormEvent) => {
    e.preventDefault();
    const answer = parseInt(userAnswer);
    if (!isNaN(answer)) {
      submitAnswer(answer);
    }
  };

  // Timer effect
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          endGame();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  // Focus input when question changes in type-answer mode
  useEffect(() => {
    if (isPlaying && settings.inputMode === 'type-answer' && inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentQuestion, isPlaying, settings.inputMode]);

  // Keyboard shortcuts for multiple choice
  useEffect(() => {
    if (settings.inputMode !== 'multiple-choice' || !isPlaying || !currentQuestion?.options) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key;
      if (['1', '2', '3', '4'].includes(key)) {
        const index = parseInt(key) - 1;
        if (currentQuestion.options && currentQuestion.options[index] !== undefined) {
          handleMultipleChoice(currentQuestion.options[index]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [settings.inputMode, isPlaying, currentQuestion]);

  const accuracy = stats.totalQuestions > 0 ? Math.round((stats.score / stats.totalQuestions) * 100) : 0;

  return (
    <div className="mental-math-page">
      <div className="mental-math-container">
        {/* Header */}
        <header className="game-header">
          <h1>Zetamac-Style Math</h1>
          {!isPlaying && (
            <div className="game-controls">
              <button 
                onClick={() => setShowSettings(!showSettings)} 
                className="settings-button"
              >
                ⚙️ Settings
              </button>
              <button onClick={startGame} className="start-button">
                {stats.totalQuestions > 0 ? 'Play Again' : 'Start Game'}
              </button>
            </div>
          )}
        </header>

        {/* Settings Panel */}
        {showSettings && !isPlaying && (
          <div className="settings-panel">
            {/* Input Mode */}
            <div className="setting-group">
              <label>Input Mode:</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    checked={settings.inputMode === 'type-answer'}
                    onChange={() => setSettings(prev => ({ ...prev, inputMode: 'type-answer' }))}
                  />
                  Type Answer
                </label>
                <label>
                  <input
                    type="radio"
                    checked={settings.inputMode === 'multiple-choice'}
                    onChange={() => setSettings(prev => ({ ...prev, inputMode: 'multiple-choice' }))}
                  />
                  Multiple Choice
                </label>
              </div>
            </div>

            {/* Operation Types */}
            <div className="setting-group">
              <label>Operations:</label>
              <div className="checkbox-group">
                {(['addition', 'subtraction', 'multiplication', 'division'] as GameMode[]).map(mode => (
                  <label key={mode}>
                    <input
                      type="checkbox"
                      checked={settings.enabledModes.has(mode)}
                      onChange={(e) => {
                        const newModes = new Set(settings.enabledModes);
                        if (e.target.checked) {
                          newModes.add(mode);
                        } else {
                          newModes.delete(mode);
                        }
                        setSettings(prev => ({ ...prev, enabledModes: newModes }));
                      }}
                    />
                    {mode.charAt(0).toUpperCase() + mode.slice(1)}
                  </label>
                ))}
              </div>
            </div>

            {/* Ranges */}
            <div className="ranges-section">
              {(['addition', 'subtraction', 'multiplication', 'division'] as GameMode[]).map(mode => (
                settings.enabledModes.has(mode) && (
                  <div key={mode} className="range-group">
                    <h4>{mode.charAt(0).toUpperCase() + mode.slice(1)} Ranges:</h4>
                    <div className="range-inputs">
                      <div>
                        <label>First number:</label>
                        <input
                          type="number"
                          value={settings.ranges[mode].min1}
                          onChange={(e) => {
                            const val = parseInt(e.target.value) || 1;
                            setSettings(prev => ({
                              ...prev,
                              ranges: {
                                ...prev.ranges,
                                [mode]: { ...prev.ranges[mode], min1: val }
                              }
                            }));
                          }}
                        />
                        <span>to</span>
                        <input
                          type="number"
                          value={settings.ranges[mode].max1}
                          onChange={(e) => {
                            const val = parseInt(e.target.value) || 100;
                            setSettings(prev => ({
                              ...prev,
                              ranges: {
                                ...prev.ranges,
                                [mode]: { ...prev.ranges[mode], max1: val }
                              }
                            }));
                          }}
                        />
                      </div>
                      <div>
                        <label>Second number:</label>
                        <input
                          type="number"
                          value={settings.ranges[mode].min2}
                          onChange={(e) => {
                            const val = parseInt(e.target.value) || 1;
                            setSettings(prev => ({
                              ...prev,
                              ranges: {
                                ...prev.ranges,
                                [mode]: { ...prev.ranges[mode], min2: val }
                              }
                            }));
                          }}
                        />
                        <span>to</span>
                        <input
                          type="number"
                          value={settings.ranges[mode].max2}
                          onChange={(e) => {
                            const val = parseInt(e.target.value) || 100;
                            setSettings(prev => ({
                              ...prev,
                              ranges: {
                                ...prev.ranges,
                                [mode]: { ...prev.ranges[mode], max2: val }
                              }
                            }));
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        )}

        {/* Game Area */}
        {isPlaying && currentQuestion ? (
          <main className="game-area">
            <div className="question-display">
              <h2>{currentQuestion.text} = ?</h2>
            </div>
            
            {settings.inputMode === 'type-answer' ? (
              <form onSubmit={handleTypeAnswer} className="type-answer-form">
                <input
                  ref={inputRef}
                  type="number"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Enter answer..."
                  className="answer-input"
                  autoFocus
                />
                <button type="submit" className="submit-button">Submit</button>
              </form>
            ) : (
              <div className="answer-grid">
                {currentQuestion.options?.map((option, index) => (
                  <button
                    key={option}
                    onClick={() => handleMultipleChoice(option)}
                    className="answer-button"
                  >
                    <span className="answer-key">{index + 1}</span>
                    <span className="answer-value">{option}</span>
                  </button>
                ))}
              </div>
            )}
          </main>
        ) : (
          /* Results/Welcome Screen */
          <main className="results-area">
            {stats.totalQuestions > 0 ? (
              <div className="results-summary">
                <h2>Game Complete!</h2>
                <div className="final-stats">
                  <div className="stat">
                    <span className="stat-value">{stats.score}</span>
                    <span className="stat-label">Correct</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">{stats.totalQuestions}</span>
                    <span className="stat-label">Total</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">{accuracy}%</span>
                    <span className="stat-label">Accuracy</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value">{stats.maxStreak}</span>
                    <span className="stat-label">Best Streak</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="welcome-screen">
                <h2>Zetamac-Style Mental Math Challenge</h2>
                <p>Configure your settings and test your arithmetic speed!</p>
                <div className="game-features">
                  <div className="feature">⚡ Instant feedback</div>
                  <div className="feature">🎯 Customizable ranges</div>
                  <div className="feature">⌨️ Type or multiple choice</div>
                  <div className="feature">📊 Real-time scoring</div>
                </div>
              </div>
            )}
          </main>
        )}

        {/* Footer Stats */}
        {isPlaying && (
          <footer className="game-footer">
            <div className="stat-item">
              <span className="stat-label">Time</span>
              <span className={`stat-value ${timeLeft <= 10 ? 'urgent' : ''}`}>
                {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
              </span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Score</span>
              <span className="stat-value">{stats.score}/{stats.totalQuestions}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Accuracy</span>
              <span className="stat-value">{accuracy}%</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Streak</span>
              <span className="stat-value">{stats.streak}</span>
            </div>
          </footer>
        )}
      </div>
    </div>
  );
};

export default MentalMath;