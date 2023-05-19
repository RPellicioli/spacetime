import { StatusBar } from "expo-status-bar";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { styled } from "nativewind";
import { useAuthRequest, makeRedirectUri } from "expo-auth-session";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { BaiJamjuree_700Bold } from "@expo-google-fonts/bai-jamjuree";

import blurBg from "../src/assets/images/blur.png";
import Stripes from "../src/assets/svg/stripes.svg";
import NLWLogo from "../src/assets/svg/logo.svg";

import { api } from "../src/lib/api";
const StyledStripes = styled(Stripes);

const discovery = {
  authorizationEndpoint: "https://github.com/login/oauth/authorize",
  tokenEndpoint: "https://github.com/login/oauth/access_token",
  revocationEndpoint:
    "https://github.com/settings/connections/applications/2ecf830270b2f3cfe9a8",
};

export default function App() {
  const router = useRouter();

  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  });

  if (!hasLoadedFonts) {
    return null;
  }

  const [request, response, signInWithGithub] = useAuthRequest(
    {
      clientId: "2ecf830270b2f3cfe9a8",
      scopes: ["identity"],
      redirectUri: makeRedirectUri({
        scheme: "spacetime",
      }),
    },
    discovery
  );

  async function handleGithubOAuthToken(code: string) {
    const response = await api.post("/register", {
      code,
    });

    const { token } = response.data;

    await SecureStore.setItemAsync("token", token);

    router.push("/memories");
  }

  useEffect(() => {
    // Código para pegar a url do redirect no github, apos pegar, setar no OAuth do projeto no GITHUB
    // console.log(makeRedirectUri({
    //   scheme: "spacetime",
    // }));

    if (response?.type === "success") {
      const { code } = response.params;
      handleGithubOAuthToken(code);
    }
  }, [response]);

  return (
    <ImageBackground
      source={blurBg}
      className="y-10 relative flex-1 items-center bg-gray-900 px-8"
      imageStyle={{ position: "absolute", left: "-100%" }}
    >
      <StyledStripes className="absolute left-2" />

      <View className="flex-1 items-center justify-center gap-6">
        <NLWLogo />

        <View className="space-y-2">
          <Text className="font-title font-2xl text-center leading-tight text-gray-50">
            Sua cápsula do tempo
          </Text>

          <Text className="font-body text-center text-base leading-relaxed text-gray-100">
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          className="roudend-full bg-green-500 px-4 py-3"
          onPress={() => signInWithGithub()}
        >
          <Text className="font-alt text-sm uppercase text-black">
            Cadastrar Lembrança
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="font-body text-center text-sm leading-relaxed text-gray-200">
        Feito por Ricardo Pellicioli
      </Text>
      <StatusBar style="light" translucent />
    </ImageBackground>
  );
}
