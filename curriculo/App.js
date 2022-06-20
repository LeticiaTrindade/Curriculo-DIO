import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Pressable, Linking, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Card from './assets/components/Card/';


const linkGithub = 'https://github.com/LeticiaTrindade/'
const linkInstagram = 'https://www.instagram.com/leticiatrindadet/'
const linkLinkedin = 'https://www.linkedin.com/in/leticiatrindadet/'
const profileImage = 'https://avatars.githubusercontent.com/u/61462194?v=4';

const App = () => {

  const handlePressGoGithub = async ()  => {
    const res = await Linking.canOpenURL(linkGithub);
    if (res){
      Linking.openURL(linkGithub);
      console.log("passou");
    }
  };

  const handlePressGoInstagram = async ()  => {
    const res = await Linking.canOpenURL(linkInstagram);
    if (res){
      Linking.openURL(linkInstagram);
    }
  };

  const handlePressGoLinkedin = async ()  => {
    const res = await Linking.canOpenURL(linkLinkedin);
    if (res){
      Linking.openURL(linkLinkedin);
    }
  };


  return (


    <View style={[styles.horizontal, styles.container]}>

    
      <View style={[styles.container, styles.horizontalEsquerda]}>

            <Text style={[styles.textDefault, styles.textName]}>Letícia Trindade</Text>
            <Text style={[styles.textDefault, styles.textSub]}>Desenvolvedora FullStack</Text>
            <Image style={styles.imagem} source={{uri: profileImage}}/>
            <Text style={[styles.textDefault, styles.textTittle]}>SOBRE</Text>
            <Text style={[styles.textDefault]}>Estou cursando Licenciatura em Computação na Universidade Federal Rural de Pernambuco. Sou apaixonado pela área da tecnologia e possuo conhecimentos HTML, CSS, JavaScript, Java, React Native, Git, GitHub.</Text>
            <Text style={[styles.textDefault, styles.textTittle]}>CONTATO:</Text>
          <View style={styles.vertical}> 
            <View style={styles.horizontal}> 
              <Icon name="phone"  style={styles.icon} />
              <Text style={[styles.textDefault]}>(81) 98556-1665</Text>
            </View>

            <View style={styles.horizontal}>
              <Icon name="mail" style={styles.icon} />
              <Text style={[styles.textDefault]}>leticiatrindade0504@gmail.com</Text>
            </View>
         </View>
      </View>

      <View style={styles.container2}>

        <Card titulo={''}>
              <Text style={[styles.textDefaultBlack, styles.textTittle2Black]}>Experiência:</Text>
              <Text style={[styles.textDefaultBlack, styles.textName]}>BYJU'S FutureSchool Brasil | 2021 - Atualmente</Text>
              <Text style={[styles.textDefaultBlack, styles.textSub]}>Professora de programação - Autônoma</Text>
              <Text style={styles.textDefaultBlack}>Ministro aulas de programação para crianças do 4º ao 6º utilizando a linguagem Javascript.</Text>
        </Card>

        <Card titulo={''}>
            <Text style={[styles.textDefaultBlack, styles.textTittle2Black]}>Formação:</Text>
            <Text style={[styles.textDefaultBlack, styles.textName]}>Licenciatura em Computação</Text>
            <Text style={[styles.textDefaultBlack, styles.textSub]}>Universidade Federal Rural de Pernambuco | 2020 - Atualmente(4º período)</Text>
        </Card>

        <Card titulo={''}>
            <Text style={[styles.textDefaultBlack, styles.textName]}>Computação Gráfica - Técnico</Text>
            <Text style={[styles.textDefaultBlack, styles.textSub]}>IFPE - Campus Olinda | 2019 - 2021(Concluído)</Text>

        </Card>
      
        <View style={[styles.footer, styles.horizontal]}>
        <Pressable onPress={handlePressGoInstagram}> 
          <Icon name="instagram"  style={styles.icon2} />
        </Pressable>
          
        <Pressable onPress={handlePressGoLinkedin}> 
          <Icon name="linkedin"  style={styles.icon2} />
        </Pressable>

        <Pressable onPress={handlePressGoGithub}> 
          <Icon name="github"  style={styles.icon2} />
        </Pressable>
        </View>

      </View>

      <StatusBar style="auto" />

    </View>


  );
}

export default App;

const styles = StyleSheet.create({
  // --------------------- Organização ----------------
  container: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  container2: {
    flex: 1.1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 8,
  },

  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },

  horizontalEsquerda: {
    backgroundColor: 'pink'
  
  },

  vertical: {
    flexDirection: 'column' ,
    alignItems: 'flex-start',
    
  },


// --------------------- Beleza ----------------
  imagem: {
    width: 175,
    height: 175,
    borderWidth: 1,
    margin: 10,
    
    borderColor: 'white',
  },

  icon: {
    color: 'white',
    fontSize: 15,
    margin: 5,
  },

// --------------------- Textos ----------------

textDefault: {
  color: 'white',
  textAlign: 'justify', 
  fontSize: 10,
  textAlignVertical: 'bottom',
  margin: 10,
  textAlign: 'left',
},

textName: {
  fontSize: 20,
  marginBottom: 0,
},

textSub: {
  fontSize:10,
  fontWeight: 'bold',
  marginTop: 0,
},

textTittle: {
  fontWeight: 'bold',
  fontSize: 15,
  margin: 0,
},

// --------------------- Textos lado direito ----------------


textTittle2Black: {
  fontWeight: 'bold',
  fontSize: 20,
  margin: 0,
},

// --------------------- Footer ----------------

footer: {
  backgroundColor: 'pink',
  marginTop: 6,
  alignSelf: 'stretch',
  alignItems: 'center',

},

icon2: {
  color: 'white',
  fontSize: 35,
  marginTop: 5,
  marginLeft: 30,
  marginBottom: 5,
},


});


