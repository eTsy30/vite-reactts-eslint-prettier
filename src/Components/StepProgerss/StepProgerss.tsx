import './stepper.css';

import React, { FC, useState } from 'react';

import Check from '../../Assets/Icon/Check Small.svg?react';
import styles from './style.module.scss';

interface IStepProgers {
  currentStep: number;
  complete: boolean;
  steps: string[];
}
export const StepProgers: FC<IStepProgers> = ({ currentStep, complete, steps }) => {
  return (
    <>
      <div className="wwer">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && 'active'} ${
              (i + 1 < currentStep || complete) && 'complete'
            } `}
          >
            <div className="step">
              {i + 1 === currentStep ? <span></span> : currentStep > i ? <Check /> : ''}
            </div>
            <p className={`stepNumber ${currentStep >= i + 1 && 'activeP'}`}>{step}</p>
          </div>
        ))}
      </div>
    </>
  );
};
