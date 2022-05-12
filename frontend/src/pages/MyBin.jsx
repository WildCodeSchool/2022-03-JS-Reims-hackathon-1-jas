import { useState } from "react";
import { Link } from "react-router-dom";
import Toggle from "react-toggle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function MyBin() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Link to="/" />
      <h2>Bonjour Simon !</h2>
      <div className="around-me">Les points de récoltes autour de vous</div>
      <div className="notifications">
        <h4>Gestion des notifications</h4>
        Souhaitez-vous modifiez vos notifications
      </div>
      <div className="poubelle-verte">
        Notification poubelle verte
        <Toggle name="toggle-pv" value="yes" />
      </div>
      <div className="poubelle-jaune">
        Notification poubelle jaune
        <Toggle id="toggle-pj" defaultChecked="true" onChange="false" />
      </div>{" "}
      <div className="le-saviez-vous">
        Notification Le-saviez-vous
        <Toggle id="" defaultChecked="true" onChange="false" />
      </div>
      <Button onClick={handleOpen}>Modifiez votre adresse</Button>
      <Modal className="modal-adresse" open={open} onClose={handleClose}>
        <Box>
          <Typography className="adresse-actuelle">
            Votre adresse actuelle : 73 rue du Docteur Thomas 27025 Quelque part
            France
          </Typography>
          <Typography className="">
            <label htmlFor="edit-adresse">
              Nouvelle adresse :
              <input type="text" id="nouvelle-adresse" />
            </label>
            <Button onClick={handleClose}>Enregistrer</Button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
