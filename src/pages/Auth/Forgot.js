import React from "react";
import { IonPage, IonInput, IonContent, IonItem, IonLabel, IonRow, IonCol, IonButton } from "@ionic/react";
import NavHeader from "../../components/Header/NavHeader";

const Forgot = () => {
  return (
    <IonPage>
      <NavHeader title="Password Reset" />
      <IonContent>
        <IonItem lines="full">
          <IonLabel position="floating">Email</IonLabel>
          <IonInput name="email" type="text" required>
          </IonInput>
        </IonItem>
        <IonRow>
          <IonCol>
            <IonButton type="submit" color="primary" expand="block">
              Get Rest Link
            </IonButton>
          </IonCol>
        </IonRow>        
      </IonContent>
    </IonPage>
  );
}

export default Forgot;