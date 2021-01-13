import { cons, car, cdr } from '@hexlet/pairs';

export const makeQA = (question, answer) => cons(question, answer);

export const getQuestion = (QA) => car(QA);
export const getAnswer = (QA) => cdr(QA);
