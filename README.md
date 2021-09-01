# nuber-eats-challenges-day9-10
## This is a two day challenge!

- 이번에는 유저 인증과 유저 CRUD를 할 차례입니다.

- 이번 챌린지 과정에서는 호스트(Host) 역할의 유저는 Podcast를 만들어서 Episode를 업로드하고,

- 리스너(Listener) 유저들이 팟캐스트를 구독하여 에피소드를 들을 수 있는,

- Podcast Discovery Application을 만들게 됩니다.

- 이번 미션은users module with entities, services and resolvers 를 만드는 것 입니다.

- 유저 인증의 조건은 아래와 같습니다.

```
- Users should be able to login with a password.

- There should be onlyoneuser entity 

- but your entity should support two roles 'Host' and 'Listener'.

- Create Guards to protect private resolvers.

- Use JWT as authentication method.

- Create a decorator to get the logged in user.
```

- resolvers에서 구현해야 할 것들은 다음과 같습니다.

```
- createAccount

- login

- editProfile

- seeProfile
```

- 패스워드는 반드시 bcrypt를 이용하여 hash화 시켜야 합니다.

- JwtModule을 만들어서 구현하시면 보너스 점수가 있습니다.

<details>
  <summary>
  Hint
  </summary>

  - 만들어야 하는 모듈은 총 세 개가 될 수도 있습니다. jwt, users, auth.

  - Podcast의 모듈을 참고하여 User 모듈에 resolver, service, entity, DTO 등을 구현하시면 됩니다.

  - 강의를 참고하시면 JwtModule을 쉽게 구현하실 수 있습니다.

  - Role Base는 유저 정보는 DB에만 구현하시면 됩니다. Role 기반 권한부여는 추후 과제로 나옵니다.

  - EditProfile에서 패스워드를 변경할 경우 꼭 다시 hashing을 해야 합니다.

  - @BeforeInsert , @BeforeUpdate 데코레이터를 참고해서 이용합니다.

  - NestJS의 guards에 대해 알고 계셔야 합니다.

  - request의 header에서 token을 받는 방법과

  - graqph의 context에 user 정보를 넘겨주는 방법을 알고 계셔야 합니다.
</details>