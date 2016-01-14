export function mapUser(user) {
  return {
    userId: user.user_id,
    name: user.name,
    givenName: user.given_name,
    familyName: user.family_name,
    nickname: user.nickname,
    picture: user.picture,
    email: user.email,
    emailVerified: user.email_verified,
    roles: user.roles,
    createdAt: user.created_at,
    updatedAt: user.updated_at,
    locale: user.locale,
  };
}
