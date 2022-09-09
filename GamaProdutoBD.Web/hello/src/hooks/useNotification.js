import { useCallback } from 'react';
import { Store } from 'react-notifications-component';


const useNotification = () => {

  const notifications = (message, type) => {
    if (message.statusCode == 200)
      type = "success";
    else if(type !='warning'){
      type = "danger";
      var erroTecnicotecnico= "'DFid_tecnico_";
      var erroTecnicoTorneio = "DFid_torneio";

      if(message.match(erroTecnicotecnico))message = "Tecnico não pode ser apagado pois esta vinculado e partida";      
      if(message.match(erroTecnicoTorneio)) message = "Torneio não pode ser apagado pois esta vinculado e partida"
    
    }
    else message = message.texto;
    switch (type) {
      case ("sucesso"):
        type = "success"
        break
      case ("danger"):
        type = "danger"
        break
      case ("default"):
        type = "default"
        break
      case ("warning"):
        type = "warning"
        break
      case ("custom"):
        type = "custom"
        break
      default:
        type = "success";
        break
    }

    Store.addNotification({
      title: type == "success" ? "Ação efetuada com sucesso!" : "Ação não efetuada!",
      message: message.statusCode == 200 ? "" : message,
      type: type,
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true
      }
    });
  };
  return { notifications };
};
export default useNotification;