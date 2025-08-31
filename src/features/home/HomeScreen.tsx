import React from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Platform,
} from 'react-native';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../core/theme';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    centerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
      padding: theme.spacing.large,
    },
    postContainer: {
      padding: theme.spacing.medium,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
      backgroundColor: theme.colors.background,
    },
    title: {
      color: theme.colors.text,
      fontSize: theme.typography.h1.fontSize,
      fontWeight: theme.typography.h1.fontWeight,
      marginBottom: theme.spacing.small,
    },
    body: {
      color: theme.colors.text,
      fontSize: theme.typography.body.fontSize,
      lineHeight: 20,
    },
    errorText: {
      color: '#FF6B6B',
      fontSize: theme.typography.body.fontSize,
      textAlign: 'center',
    },
    loadingText: {
      color: theme.colors.text,
      fontSize: theme.typography.body.fontSize,
      marginTop: theme.spacing.medium,
    },
  });

const fetchPosts = async () => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/posts',
  );
  return data;
};

const HomeScreen = () => {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  const styles = createStyles(theme);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
        <Text style={styles.loadingText}>Loading posts...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>
          Error fetching posts{'\n'}
          Please check your internet connection and try again.
        </Text>
      </View>
    );
  }

  // Handle empty data case
  if (!data || data.length === 0) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>No posts available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Text style={styles.title} numberOfLines={2}>
              {item.title}
            </Text>
            <Text style={styles.body} numberOfLines={3}>
              {item.body}
            </Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom:
            Platform.OS === 'ios'
              ? (insets.bottom > 0 ? 90 + insets.bottom : 90) +
                theme.spacing.large
              : 60 + theme.spacing.large,
        }}
      />
    </View>
  );
};

export default HomeScreen;
