export function getResponseText(isSent: number, language: string) {
  switch (language) {
    case "FR":
      switch (isSent) {
        case 0:
          return "";
        case 200:
          return "message envoyé";
        case 500:
          return "échec d'envoi, veuillez réessayer.";
        default:
          return "";
      }
    case "EN":
      switch (isSent) {
        case 0:
          return "";
        case 200:
          return "message sent";
        case 500:
          return "Error sending, please try again.";
        default:
          return "";
      }
    default:
      return "";
  }
}
