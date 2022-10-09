import iconCircleDanger from 'assets/revamp/icon-circle-danger.svg';
import circleIconGray from 'assets/revamp/icon/circleIconGray.svg';
import iconProgressCircle from 'assets/revamp/icon/icon-progress-circle.svg';
import successIcon from 'assets/revamp/icon/successIcon.svg';

export const setIcon = (status, isData) => {
  if (status < 7) {
    return successIcon;
  } else if (status == 7) {
    return iconCircleDanger;
  } else if (status == 8) {
    return circleIconGray;
  } else if (status == 9) {
    return iconProgressCircle;
  }
};
export const setClassname = (status, isData) => {
  if (status < 7) {
    return 'successIcon';
  } else if (status == 7) {
    return 'failedIcon';
  } else if (status == 8) {
    return 'notyetIcon';
  } else if (status == 9) {
    return 'currentIcon';
  }
};
