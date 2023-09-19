import { ESlideTypes, TFeatureSection } from 'src/types';

import callRecordBlocker from 'src/assets/image/features/call-record-blocker.svg';
import screenRecordingDetection from 'src/assets/image/features/screen-recording-detection.svg';
import socialMediaProtection from 'src/assets/image/features/social-media-protection.svg';
import spywareDetector from 'src/assets/image/features/spyware-detector.svg';
import trackerDetector from 'src/assets/image/features/tracker-detector.svg';
import alertIcon from 'src/assets/image/icons/alert.svg';
import antivirusIcon from 'src/assets/image/icons/antivirus.svg';
import bellIcon from 'src/assets/image/icons/bell.svg';
import deviceIcon from 'src/assets/image/icons/device-2.svg';
import guardIcon from 'src/assets/image/icons/guard.svg';
import identityIcon from 'src/assets/image/icons/identity.svg';
import incognitoIcon from 'src/assets/image/icons/incognito.svg';
import infinityIcon from 'src/assets/image/icons/infinity.svg';
import instagramIcon from 'src/assets/image/icons/instagram.svg';
import locationIcon from 'src/assets/image/icons/location.svg';
import messagesIcon from 'src/assets/image/icons/messages.svg';
import networkIcon from 'src/assets/image/icons/network.svg';
import phoneIcon from 'src/assets/image/icons/phone.svg';
import safariIcon from 'src/assets/image/icons/safari.svg';
import silentIcon from 'src/assets/image/icons/silent.svg';
import spywareIcon from 'src/assets/image/icons/spyware.svg';
import widgetIcon from 'src/assets/image/icons/widget.svg';

export const BILLING_BENEFITS = [
  {
    icon: phoneIcon,
    label: 'Protection for 3 devices',
  },
  { icon: guardIcon, label: 'Anti-spy checkup' },
  { icon: infinityIcon, label: 'Unlimited access to anti-spying tools' },
  {
    icon: messagesIcon,
    label: '24/7 help from security experts',
  },
];

export const FEEDBACKS = [
  {
    type: ESlideTypes.trustPilot,
    description: 'Great service! They were an amazing help with making sure my device is secure.',
    author: 'Megan_N',
  },
  {
    type: ESlideTypes.trustPilot,
    description: 'It is a great application to protect yourself from hackers.',
    author: 'Manweet',
  },
  {
    type: ESlideTypes.trustPilot,
    description: 'Great service! They were an amazing help with making sure my device is secure.',
    author: 'Megan_N',
  },
  {
    type: ESlideTypes.trustPilot,
    description:
      'The best app you could find! I had a problem of malware which added unknown accounts to my device. The "Talk to experts" feature saved the day! I was helped in all possible ways.',
    author: 'Shahu Sardar',
  },
  {
    type: ESlideTypes.trustPilot,
    description:
      'Great app! Cool thing with the data breaches - checked mine and my boyfriends emails and found 10! passwords we need to change',
    author: 'Zagkri',
  },
];

export const FEATURES_SECTIONS: TFeatureSection[] = [
  {
    isShowLog: true,
    title: 'Spyware detector',
    description: 'Find apps secretly spying on you and your data.',
    image: spywareDetector,
    bgcolor: '#EFF1FF',
    features: [
      {
        icon: identityIcon,
        label: 'Full background anti-spyware scan',
      },
      {
        icon: bellIcon,
        label: 'Instant spyware detection alerts',
      },
      {
        icon: networkIcon,
        label: 'Immediate threat quarantining',
      },
    ],
  },
  {
    isShowLog: true,
    title: 'Tracker detector',
    description: 'Discover who tracks your location to spy on you.',
    image: trackerDetector,
    bgcolor: '#F6EDFA',
    features: [
      {
        icon: spywareIcon,
        label: 'Stop being secretly tracked',
      },
      {
        icon: locationIcon,
        label: 'Protect your real location',
      },
      {
        icon: safariIcon,
        label: 'Control who sees your location',
      },
    ],
  },
  {
    title: 'Social media protection',
    description: 'Easily prevent social media account hacks.',
    image: socialMediaProtection,
    bgcolor: '#F6EDFA',
    features: [
      {
        icon: instagramIcon,
        label: 'See who uses your accounts',
      },
      {
        icon: antivirusIcon,
        label: 'Revoke access for other users',
      },
      {
        icon: bellIcon,
        label: 'Get unauthorized login alerts',
      },
    ],
  },
  {
    title: 'Call recorder blocker',
    description: 'Discover if someone records your calls and chats. ',
    image: callRecordBlocker,
    bgcolor: '#EAF5E4',
    features: [
      {
        icon: deviceIcon,
        label: 'Hide your call history and records',
      },
      {
        icon: widgetIcon,
        label: 'Revoke sharing your contact list',
      },
      {
        icon: alertIcon,
        label: 'Help secret texts remain secret',
      },
    ],
  },
  {
    title: 'Screen recording detector',
    description: 'Don’t let anyone access your phone screen. ',
    image: screenRecordingDetection,
    bgcolor: '#EFF1FF',
    features: [
      {
        icon: incognitoIcon,
        label: 'Find out if your screen is being recorded',
      },
      {
        icon: silentIcon,
        label: 'Immediately stop silent recordings',
      },
      {
        icon: bellIcon,
        label: 'Get alerts if your camera is in use',
      },
    ],
  },
];
