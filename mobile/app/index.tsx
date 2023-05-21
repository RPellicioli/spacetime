import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

import { useAuthRequest, makeRedirectUri } from "expo-auth-session";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";

import NLWLogo from "../src/assets/svg/logo.svg";

import { api } from "../src/lib/api";

const discovery = {
  authorizationEndpoint: "https://github.com/login/oauth/authorize",
  tokenEndpoint: "https://github.com/login/oauth/access_token",
  revocationEndpoint:
    "https://github.com/settings/connections/applications/2ecf830270b2f3cfe9a8",
};

export default function App() {
  const router = useRouter();
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
    <View className="y-10 flex-1 items-center px-8">
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
    </View>
  );
}
