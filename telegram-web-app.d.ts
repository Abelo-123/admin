// telegram-web-app.d.ts
interface TelegramWebApp {
    version: any;
    initDataUnsafe: {
      user: {
        id: number;
        username: string;
        first_name: string;
        last_name: string;
      };
    };
    hideHeader: () => void;
    ready: () => void;
    themeParams: {
      bg_color?: string;
      text_color?: string;
      hint_color?: string;
      link_color?: string;
      button_color?: string;
      button_text_color?: string;
      secondary_bg_color?: string;
      hint_text_color?: string;
      destructive_text_color?: string;
    };
    // Add the expand method
    expand: () => void;
    close: () => void;
    openUrl: (url: string) => void;
    openTelegramLink:  (url: string) => void;
    onEvent?: (eventName: string, callback: () => void) => void;
  }
  
  interface Window {
    Telegram: {
      WebApp: TelegramWebApp
    };
  }
  type AvatarProps = {
  size: number;
  src?: string;
};
