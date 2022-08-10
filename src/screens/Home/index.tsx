import { View, Text, TextInput, TouchableOpacity } from "react-native";

import Participant from "../../components/Participant";

import { styles } from "./styles";

export default function Home() {
  function handleParticipantAdd() {
    console.log("Add");
  }

  function handleParticipantRemove(name: string) {
    console.log("Remove", name);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant
        name="Pedro"
        onRemove={() => handleParticipantRemove("Pedro")}
      />
    </View>
  );
}
