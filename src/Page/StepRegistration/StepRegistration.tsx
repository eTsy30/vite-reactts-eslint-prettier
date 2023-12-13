/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';

import { ErrorChild } from '../../Components/Modal/Error/Error';
import { Modal } from '../../Components/Modal/Modal';
import { SuccessChild } from '../../Components/Modal/Success/SuccessChild';
import { StepProgres } from '../../Components/StepProgerss/StepProgerss';
import { Step1 } from '../../Form/Step1/Step1';
import { Step2 } from '../../Form/Step2/Step2';
import { Step3 } from '../../Form/Step3/Step3';
import styles from './style.module.scss';
export const StepRegistration = () => {
  const steps = ['1', '2', '3'];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [visibleModal, setVisibleModal] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  visibleModal
    ? document.body.classList.add('modal-open')
    : document.body.classList.remove('modal-open');

  let stepComponent = null;
  switch (currentStep) {
    case 1:
      stepComponent = <Step1 currentStep={currentStep} setCurrentStep={setCurrentStep} />;
      break;
    case 2:
      stepComponent = <Step2 currentStep={currentStep} setCurrentStep={setCurrentStep} />;
      break;
    case 3:
      stepComponent = (
        <Step3
          setIsError={setIsError}
          setVisibleModal={setVisibleModal}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      );
      break;
    default:
      stepComponent = null;
      break;
  }

  return (
    <div className={styles.container}>
      <StepProgres currentStep={currentStep} complete={complete} steps={steps} />
      {stepComponent}
      {visibleModal && (
        <Modal setVisibleModal={setVisibleModal}>
          {isError ? (
            <ErrorChild setVisibleModal={setVisibleModal} />
          ) : (
            <SuccessChild setVisibleModal={setVisibleModal} />
          )}
        </Modal>
      )}
    </div>
  );
};
