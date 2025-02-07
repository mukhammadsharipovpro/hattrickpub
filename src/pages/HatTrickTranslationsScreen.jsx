import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import HatTrickHeader from '../components/HatTrickHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <HatTrickHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast(
          'UEFA Champions League',
          '02.03 21:00',
          'Real Madrid \n' + 'Manchester City',
        )}
        {renderBroadcast(
          'Eredivisie',
          '06.03 19:30',
          'Ajax \n' + 'PSV Eindhoven',
        )}
        {renderBroadcast(
          'Liga Portugal',
          '10.03 20:45',
          'Benfica \n' + 'Sporting CP',
        )}
        {renderBroadcast(
          'Scottish Premiership',
          '13.03 19:00',
          'Celtic \n' + 'Rangers',
        )}
        {renderBroadcast(
          'Brazil Serie A',
          '17.03 20:00',
          'Flamengo \n' + 'Palmeiras',
        )}
        {renderBroadcast(
          'J-League',
          '20.03 18:00',
          'Kawasaki Frontale \n' + 'Urawa Reds',
        )}
        {renderBroadcast(
          'IPL Cricket',
          '23.03 16:30',
          'Mumbai Indians \n' + 'Chennai Super Kings',
        )}
        {renderBroadcast(
          'Six Nations Rugby',
          '26.03 20:00',
          'England \n' + 'France',
        )}
        {renderBroadcast(
          'ATP Tennis',
          '29.03 18:00',
          'Carlos Alcaraz \n' + 'Jannik Sinner',
        )}
        {renderBroadcast(
          'The Masters Golf',
          '01.04 10:00',
          'Augusta National \n' + 'Final Round',
        )}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.main,
    elevation: 5,
    paddingLeft: 20,
    borderRadius: 12,
  },
  league: {
    fontSize: 20,
    fontFamily: FONTS.black,
    color: COLORS.black,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    width: '60%',
    marginLeft: 15,
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.white,
    marginTop: 5,
    marginLeft: 5,
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    margin: 20,
    textAlign: 'center',
  },
});
