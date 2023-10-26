import React from 'react';
import CustomDialogTrigger from '../global/custom-dialog-trigger';
import SettingsForm from './settings-form';

interface SettingsProps {
  children: React.ReactNode;
}

const Settings: React.FC<SettingsProps> = ({ children }) => {
  return (
    <CustomDialogTrigger
      header="Settings"
      content={<SettingsForm />}
    >
      {children}
    </CustomDialogTrigger>
  );
};

export default Settings;
