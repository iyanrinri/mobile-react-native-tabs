import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Receipt Savvy</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Digitalisasi Struk Belanja Anda</ThemedText>
        <ThemedText>
          Aplikasi ini membantu Anda mencatat transaksi dengan mudah melalui scan foto struk dari kamera atau upload dari galeri. Semua struk akan diubah menjadi pencatatan transaksi yang rapi dan mudah diakses.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.ctaContainer}>
        <ThemedText type="subtitle" style={{ textAlign: 'center' }}>
          Yuk, gabung dan coba sekarang!
        </ThemedText>
        <Pressable
          style={styles.loginButton}
          onPress={() => router.push('/login')}
        >
          <ThemedText style={styles.loginButtonText}>Masuk / Daftar</ThemedText>
        </Pressable>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 16,
  },
  ctaContainer: {
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  loginButton: {
    marginTop: 12,
    backgroundColor: '#1D3D47',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
