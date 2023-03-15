
import styles from './avatar.module.css'
import { AvatarProps } from "./types";

export function Avatar({ hasBorder = true, ...props}: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}