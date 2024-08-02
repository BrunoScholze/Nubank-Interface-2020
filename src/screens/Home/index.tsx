import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import logo from "../../assets/logo.png";
import Setting from "../../assets/setting.png";
import mastercard from "../../assets/mastercard.png";
import wallet from "../../assets/Wallet.png";
import pix from "../../assets/pix.png";
import boleto from "../../assets/boleto.png";
import deposito from "../../assets/dinheiro.png";

export default function Home() {
  return (
<ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Image source={logo} />
            <Image source={Setting} />
          </View>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View />
              <Image source={mastercard} />
            </View>
            <Text style={styles.cardText}>**** 3421</Text>
          </View>

          <View style={styles.cardDetails}>
            <View style={styles.cardDetailsHeader}>
              <Text style={styles.cardDetailsTextHeader}>Saldo Disponível</Text>
              <Image source={wallet} />
            </View>
            <Text style={styles.cardDetailText}>R$ 4500,00</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Do que precisa?</Text>

          <ScrollView
            style={styles.footerContentScrollview}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
          >
            <View style={styles.footerCard}>
              <Image source={pix} />
              <Text style={styles.footerCardText}>Fazer um pix</Text>
            </View>

            <View style={styles.footerCard}>
              <Image source={boleto} />
              <Text style={styles.footerCardText}>Pagar um Boleto</Text>
            </View>

            <View style={styles.footerCard}>
              <Image source={deposito} />
              <Text style={styles.footerCardText}>Fazer um Depósito</Text>
            </View>

            <View style={styles.footerCard}>
              <Image source={pix} />
              <Text style={styles.footerCardText}>Cartoes</Text>
            </View>

         
          </ScrollView>
        </View>

        <View style={styles.footerInvest}>
          <Text style={styles.footerTextInvest}>Nu investe</Text>
          <View style={styles.cardInvest}>
            <Text style={styles.cardInvestTitle}>
              Já conhece nossa plataforma de investimentos?
            </Text>

            <Text style={styles.cardInvestText}>
              De renda fixa a variável, voce encontra as opções para todos os perfis.
            </Text>
            <View style={styles.button}>
              <Text style={styles.centeredText}>Aplicar</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1B1B1B",
    paddingTop: 40,
  },

  content: {
    paddingHorizontal: 30,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  card: {
    width: "100%",
    height: 190,
    backgroundColor: "#5C0098",
    borderRadius: 20,
    elevation: 5,
    marginBottom: 20,
    padding: 20,
    justifyContent: "space-between",
  },

  cardDetails: {
    width: "100%",
    height: 120,
    backgroundColor: "#5C0098",
    borderRadius: 20,
    elevation: 5,
    padding: 20,
    justifyContent: "space-between",
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  cardText: {
    color: "#fff",
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "600",
  },

  cardDetailsHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
  },

  cardDetailText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "600",
  },

  cardDetailsTextHeader: {
    color: "#fff",
  },

  footer: {
    paddingTop: 20,
    paddingLeft: 20,
  },

  footerText: {
    marginHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },

  footerTextLast: {
    marginHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 30,
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },

  footerCard: {
    width: 100,
    height: 127,
    backgroundColor: "#5C0098",
    elevation: 5,
    borderRadius: 20,
    padding: 20,
    justifyContent: "space-between",
    marginLeft: 10,
  },

  footerCardText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 18,
  },

  footerContentScrollview: {
    height: 150,
  },

  cardInvest: {
    height: 175,
    backgroundColor: "#5C0098",
    borderRadius: 20,
    elevation: 5,
    justifyContent: "space-between",
  },

  footerInvest: {
    paddingHorizontal: 30,
  },

  footerTextInvest: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 12,
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },

  cardInvestTitle: {
    marginHorizontal: 20,
    paddingTop: 25,
    paddingBottom:10,
    color: "#fff",
    fontWeight: "600",
    fontSize: 17,
  },

  cardInvestText: {
    marginHorizontal: 20,
    paddingBottom: 20,
    fontWeight: "300",
    color: "#fff",
    fontSize: 17,
  },
  center: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: '100%',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#750EB9",
    borderEndStartRadius: 20,
    borderEndEndRadius: 20,
  },

  centeredText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "300",
  },

  scrollViewContent: {
    flexGrow: 1,
  },
});
