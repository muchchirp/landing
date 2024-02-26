// src/components/CustomCookieConsent.css.ts
import { style } from '@vanilla-extract/css';
import { theme } from "../theme.css";
import { media } from "./ui.css";

export const cookieConsentContainer = style({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'white',
  color: 'black',
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0 -2px 5px rgba(0,0,0,0.1)',
  zIndex: 1000,
});

export const message = style({
  margin: 0,
  flex: 1,
});

export const buttons = style({
  marginLeft: '20px',
});

export const acceptButton = style({
  background: 'none',
  border: 'none',
  color: theme.colors.primary,
  cursor: 'pointer',
  marginLeft: '10px',
});

export const rejectText = style({
  textDecoration: 'underline',
  //...acceptButton, // Reuse acceptButton styles and override as needed
});
