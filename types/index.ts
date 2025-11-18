// React and third-party imports
import { ClassValue } from "clsx";
import React, { ReactNode, SetStateAction } from "react";

// Custom imports
import { customGradients } from "@/lib/customClasses";
import { PlutusUser } from './user'

/*
 * Basic Type Definitions
 */

// Size options for components
export type sizes = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

// Derive a type from the keys of customGradients for gradient options
export type Gradient = keyof typeof customGradients;

/*
 * Text and Typography Related Interfaces
 */

// Props for PlutusTextStyles component
export interface PlutusTextStylesProps {
  variant?: "gradient" | "normal";
  size?: sizes;
  font?:
    | "manrope"
    | "mulish"
    | "poppins"
    | "rubik"
    | "roboto"
    | "inter"
    | "dmsans"
    | "raleway"
    | "notosans"
    | "opensans"
    | "montserrat"
    | "ubuntu";
  isItalic?: boolean;
  className?: string;
  children?: ReactNode | string;
  gradient?: Gradient;
  heading?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div";
  shouldApplyEllipsis?: boolean;
}

/*
 * Input and Button Related Interfaces
 */

// Props for PlutusInput component
export interface PlutusInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  label: string;
  textArea?: boolean;
  placeholder?: string;
  errorText?: string;
  successText?: string;
  enableTooltip?: boolean;
  tooltip?: string;
  icon?: React.ReactNode | JSX.Element;
  trailingIcon?: React.ReactNode | JSX.Element;
  image?: string;
  labelClasses?: string;
  inputClasses?: string;
  inputBackgroundClasses?: string;
  buttonClasses?: string;
  name?: string;
  prefixText?: string;
  isPrefixBold?: boolean;
  optionalActionWidget?: React.ReactNode | JSX.Element;

  handleInput: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

// Props for PlutusButton component
export interface PlutusButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "filled" | "text" | "gradient";
  size?: sizes;
  fullWidth?: boolean;
  children?: React.ReactNode;
  className?: string;
  iconOnly?: boolean;
  link?: boolean;
  url?: string;
  gradient?: string;
  icon?: React.ReactNode | JSX.Element;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  loaderIcon?: React.ReactNode | JSX.Element;
  externalRedirect?: boolean;
}

/*
 * Link and Navigation Related Interfaces
 */

// Props for PlutusIconLink component
export interface PlutusIconLinkProps
  extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  variant: "light" | "dark";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  linkTitle?: string;
  href: string;
  openInNewTab?: boolean;
  className?: string;
  iconOnly?: boolean;
  icon?: React.ReactNode | JSX.Element;
}

/*
 * Card and Display Related Interfaces
 */

// Props for FeatureCard component
export interface FeatureCardProps {
  href: string;
  icon: React.ReactNode | JSX.Element;
  title: string;
  fullWidth?: boolean;
  linkClasses?: string;
  titleClasses?: string;
}

// Props for CardWithProgressBar component
export interface CardWithProgressBarProps {
  value: number;
  setValue: (val: number) => void;
  lowerLimit: number;
  upperLimit: number;
  incrementFactor: number;
  title: string;
  description: string;
  isLarge?: boolean;
}

/*
 * Form and Dialog Related Interfaces
 */

// Props for JoinWaitListForm
export interface JoinWaitListForm {
  username: string;
  name: string;
  email: string;
  socialMediaUrl: string;
  errorUsername: string;
  errorName: string;
  errorEmail: string;
  errorSocialMediaUrl: string;
}

// Props for ReferForm component
export interface ReferFormProps {
  email: string;
  contact: string;
  socialMediaUrl: string;
  websiteUrl: string;
  errorContact: string;
  errorWebsiteUrl: string;
  errorEmail: string;
  errorSocialMediaUrl: string;
}

// Props for DialogWrapper component
export interface DialogWrapperTypes {
  id?: string;
  triggerComponent?: React.ReactNode;
  className?: string;
  italic?: boolean;
  focusedTitle?: string;
  title?: string;
  dialogBody: React.ReactNode;
  enableSeparator?: boolean;
  footerComponent?: React.ReactNode;
  buttonText?: string;
  footer: boolean;
  showHeader?: boolean;
  customHeader?: React.ReactNode;
  open?: boolean;
  isPhoneScreen?: boolean;
  setOpen?: (val: boolean) => void;
  onCloseCallback?: () => void;
  submitClickHandler?: (e: React.SyntheticEvent) => void;
  titleClasses?: string;
  focusedTitleClasses?: string;
  headerClassName?: string;
  disabled?: boolean;
  overlayClassName?: string;
  preventCloseOnOutsideClick?: boolean;
  onDialogContentClick?: (() => void) | ((e: React.SyntheticEvent) => void);
}
export interface StepDialogWrapperTypes {
  id?: string;
  triggerComponent?: React.ReactNode;
  className?: string;
  focusedTitle?: string;
  title?: string;
  dialogContent?: React.ReactNode;
  dialogContentClassName?: string;
  stepChildren: StepDialogChildren[];
  dialogStyleCSS?: React.CSSProperties;
  onStepChange?: () => void;
  enableSeparator?: boolean;
  enableStepIndicator?: boolean;
  showHeader?: boolean;
  open?: boolean;
  isPhoneScreen?: boolean;
  setOpen?: React.Dispatch<SetStateAction<boolean>> | ((val: boolean) => void);
  submitClickHandler?: (e: React.SyntheticEvent) => void;
  titleClasses?: string;
  focusedTitleClasses?: string;
  headerClassName?: string;
  disabled?: boolean;
  overlayClassName?: string;
  preventCloseOnOutsideClick?: boolean;
  onDialogContentClick?: (() => void) | ((e: React.SyntheticEvent) => void);
}

export interface StepDialogChildren {
  title: string;
  content: React.ReactNode;
  buttonText?: string;
  buttonClassName?: string;
  stepDisabled?: boolean;
  stepAction: () => void;
}

export interface DataDialogWrapperTypes {
  triggerComponent?: React.ReactNode;
  className?: string;
  italic?: boolean;
  focusedTitle?: string;
  title?: string;
  dialogBody: React.ReactNode;
  footerComponent?: React.ReactNode;
  buttonText?: string;
  open?: boolean;
  setOpen?: (val: boolean) => void;
  titleClasses?: string;
  focusedTitleClasses?: string;
}
// Props for AlertDialogWrapper component
export interface AlertDialogWrapperTypes {
  triggerComponent?: React.ReactNode;
  title?: string;
  description?: string | React.ReactNode;
  cancelButtonText?: string;
  actionButtonText?: string;
  onAction?: () => void;
  triggerClassName?: string;
  titleClassName?: string;
  alertDialogContentClassName?: string;
  descriptionClassName?: string;
  cancelButtonClassName?: string;
  actionButtonClassName?: string;
  open?: boolean;
  alertTitle?: string;
  setOpen?: (val: boolean) => void;
}

// Props for DrawerDragWrapper component
export interface DrawerDragWrapper {
  triggerComponent?: React.ReactNode;
  className?: string;
  title?: string;
  drawerBody: React.ReactNode;
  enableSeparator?: boolean;
  footerComponent?: React.ReactNode;
  footer?: boolean;
  showHeader?: boolean;
  open?: boolean;
  isPhoneScreen?: boolean;
  setOpen?: (val: boolean) => void;
  titleClasses?: string;
  disabled?: boolean;
  modal?: boolean;
  direction?: "top" | "bottom" | "left" | "right";
  snapPoints?: number[];
  toggleDrawer?: () => void;
  overlayClassName?: string;
}

/*
 * Menu and Accordion Related Interfaces
 */

export interface DropDownMenuListProps {
  name: string;
  childInteractive?: boolean;
  dialog?: boolean;
  isStepDialog?: boolean;
  stepDialogChildren?: StepDialogChildren[];
  dialogBody?: JSX.Element | React.ReactNode;
  title?: string;
  focusedTitle?: string;
  className?: string;
  footer?: boolean;
  link?: string;
  newPage?: boolean;
  separator?: boolean;
  icon?: React.ReactNode;
  click?: () => void;
  children?: React.ReactNode;
  hiddenClassName?: string;
  dialogClassName?: string;
  dialogHeader?: boolean;
  dialogOpen?: boolean;
  separatorClassName?: string;
  setDialogOpen?: (open: boolean) => void;
}

// Props for DropDownMenu component
export interface DropDownMenuProps {
  triggerComponent: React.ReactNode;
  focused?: boolean;
  open?: boolean;
  setOpen?: (open: boolean) => void;
  side?: "left" | "right" | "bottom" | "top";
  sideOffset?: number;
  align?: "start" | "center" | "end";
  alignOffset?: number;
  menuList: DropDownMenuListProps[];
  menuItemClassName?: string;
  className?: string;
}

// Props for Accordion component
export interface AccordionProps {
  accordionData: {
    value: string;
    triggerText: string;
    content: React.ReactNode | string;
  }[];
  type?: "single" | "multiple";
  defaultOpen?: string | string[];
  scaleOnOpen?: boolean;
  ItemClassName?: string;
  TriggerTextClassName?: string;
  ContentClassName?: string;
}

/*
 * Game Section Related Interfaces
 */

// Props for GameCard component
export interface GameCardProps {
  gameImageSrc: string;
  game: string;
  gameDescription: string;
  onClick?: () => void;
}

// Props for CreateGameDialog component
export interface CreateGameDialogProps {
  triggerComponent: React.ReactNode | JSX.Element;
  game: string;
  gameImageSrc: string;
  gameDescription: string;
  contentBoards: string[];
  contentBackgrounds: string[];
  contentAdditionalItems?: string[];
  open?: boolean;
  setOpen?: (val: boolean) => void;
}

// props for testimonial comments
export interface TestimonialCommentProps {
  comment: string;
  user: Partial<PlutusUser>;
}

// Props for ImageUpload component
export interface ImageUploadProps {
  className?: string;
  acceptedFileType: string[];
  uploadIcon?: React.ReactNode;
  uploadText?: string;
  multiple?: boolean;
}

export interface FanProfilePopUpButtons {
  title: string;
  icon: React.ReactNode;
  route: string;
}

// props for how it works
export interface HowItWorksTileProps {
  image: string;
  tag: string;
  title: string;
  subTitle: string;
}

// Add disputes for  formdata
export interface AddDisputeFormData {
  opinionId: string;
  message: string;
}

export interface BuyOpinionRequest {
  opinionId: string;
  share: number;
  type: string;
}

////////////// Trade Constants //////////////
export enum TradeStatus {
  OPEN = "open",
  CLOSED = "closed",
}

export interface IObject {
  [x: string]: any;
}
