# Privacy Policy / 개인정보 처리방침

**RacquetPilot** (beta)

| | |
|---|---|
| Effective / 시행일 | **2026-08-24** (previous / 이전: 2026-08-23) |
| Operator / 운영자 | **Junhyeon Seo (서준현)** |
| Privacy Officer / 개인정보 보호책임자 | **Junhyeon Seo (서준현)** |
| Contact / 문의 | **bizforeverything@gmail.com** |

---

# English

## In one line

**Your measurements are sent to our server automatically.** That is what taking
part in the beta means. **Your nickname and comments** are sent only when you
write them yourself.

---

## 1. Sent automatically

Each time you finish a measurement:

| Item | Detail |
|---|---|
| Measurements | Frequency, retention, cumulative play hours, timestamp, season |
| Racquet | Make, model, head size, string pattern |
| String | Brand, model, gauge, machine tension, date strung |
| App version | To reproduce issues |
| Diagnostics | Numbers telling us whether the app is working correctly |
| Test marker | A yes/no flag showing the record was created by the developer while checking the screens, so it can be excluded from analysis |
| **Anonymous device token** | A random number created on first launch — see 3 |

No accounts, no logins, no analytics, no ads, no tracking.
**Nothing goes anywhere except our own server.**

⚠️ On indoor courts with no signal it is **held on your phone and sent later.**
Nothing is shown on screen while it waits.

### Why automatic

If we only received what people chose to send, we would mostly hear from those
who already felt their strings were dead — and the answer to "when should I
restring" would be skewed from the start.

If you do not agree you cannot take part in the beta: **collecting this data is
what the beta is for.** The public release will separate required from optional.

---

## 2. Microphone

We measure **only the frequency** of the sound your stringbed makes when tapped.

- Audio is analyzed **on-device in real time** and discarded immediately
- **No recording is created.** Nothing is stored or transmitted
- What remains is **a single number (Hz)**

---

## 3. Anonymous device token

A random number created the first time you open the app, e.g. `3f2a9c81-…`

- It is **not** your device's identifier (no UDID, no advertising ID). It is a
  random number we generate and keep; nothing about your phone goes into it
- It does not tell us who you are
- It is kept in the phone's keychain, **so it survives reinstalling the app**
- It never leaves this phone and is not synced to iCloud
- **You can clear it at any time**: Settings → withdraw consent deletes your
  data and issues a fresh token

We need it to put one person's measurements in order — without it we cannot
compute "how much did it drop after three hours of play".

> **Changed on 2026-08-24.** It used to be erased when you deleted the app.
> During the beta that turned one person reinstalling four times into four
> different "testers", which made the numbers we are trying to measure —
> whether two phones read the same string alike, whether people come back —
> impossible to compute. Since deleting the app no longer clears it, we added
> the control above.

---

## 4. Kept on your device only

In the app's private storage. Other apps cannot read it.

- Racquet, string and measurement records (same as section 1)
- App settings (theme, language, feature votes)
- Anything still waiting to be sent
- Your consent history (when, and to which wording)

**Deleting the app deletes all of it.**

---

## 5. When you tap "Send feedback"

Only then are your **nickname and comments** included.

| Item | Detail |
|---|---|
| Nickname | Whatever you type. **It need not be your real name** |
| Ratings | "Does it feel dead" 1–5, "Would you restring now" yes/no |
| Free comment | Whatever you write |
| Feature votes | What you picked under "What should we build next?" |

⚠️ **The nickname and comment contain exactly what you type.** Please avoid
anything that identifies you personally.

**Contacts, location, phone numbers and device identifiers are never included.**

---

## 5b. If you use Stringer mode

Stringer mode is for people who string racquets for others. It logs the work
instead of tracking one racquet over time.

| Item | What it is |
|---|---|
| Mode | Whether this phone is set to "my racquets" or "stringer" |
| Each job | Date strung, racquet model, string and gauge, the tension you set, and the frequency measured right after |

**The note field never leaves your phone.** It exists so you can tell one
racquet from another, and it is the one place a customer's name could end up.
It is not in what we send.

**We do not ask for and do not receive anything about your customers** — no
names, no phone numbers, no order numbers.

### About you, asked once

| Item | What it is |
|---|---|
| Experience | How many years you have been stringing, if you tell us |
| Certification | Whether you hold one, and which |
| Machine | Lockout / constant-pull / drop weight, and the model |
| Access code | Which of our codes you used to open stringer mode |
| Shop connect | Whether you said you were interested — yes or no, nothing more |

The same machine gives different tension depending on who is working it. This
is what lets us separate the machine's part from the person's part. **We do not
ask for your name, your contact details or your shop name** — they would not
help with that, and asking would change what this data is.

**About the access code.** We issue a different code to each shop, so the code
tells one shop's readings from another's without us holding a name. Who we gave
each code to is written down on our side only; it is never in the app and never
sent with your data. If you would rather your readings not be grouped that way,
tell us and we will issue you a code that is not tied to anything.

**About shop connect.** We may later build something that connects players with
shops. The question in the app records only yes or no. **We do not collect
contact details for it** — if that project starts, we will ask separately and
explain what we would do with them first.

You can skip all of it and still log jobs.

### Sending

Each job is sent when you save it. **Send data** in the job log re-sends
everything — press it as often as you like. We would rather receive something
twice than lose it: the racquet has already gone back to its owner.

---

## 5c. Lab mode

If you were given a lab code — you are helping us measure string factors on a
rig. Each trial sends the string, the free length, the tension and the
frequency. Nothing about you is attached.

---

## 6. What we use it for

| Purpose | How |
|---|---|
| More accurate tension | Analyzing tension loss per string |
| Building "when to restring" | Regressing retention against play hours |
| Deciding what to build next | Feature votes |
| Developing and improving features | Finding where the app is wrong or hard to use |
| Building string and racquet reference data | Statistics that cannot be traced back to a person — used in this app and in our other tennis features |

**Never for advertising. Never sold or shared with third parties.**

The last row is about **numbers, not people**: how much tension a given string
loses per hour of play, and how that differs between racquets. Once it is a
statistic it no longer says anything about you, and it is what makes the app
able to answer "should I restring" for someone who has never measured before.

---

## 7. Where it is stored

| | |
|---|---|
| Location | **Seoul, Republic of Korea** (Amazon Web Services `ap-northeast-2`) |
| Processor | Amazon Web Services — cloud infrastructure |
| Who can reach it | Only the operator. The operator lives in the **United States (Maryland)** and reads it from there |
| Storing or processing it abroad | Not today. If that changes we will tell you **what, where, to whom and why — before it happens** — and ask you again. You can say no |

The storage is **private** and not reachable from outside.

> The earlier version of this policy said the data "does not leave Korea."
> That was written as a permanent promise, and it should not have been: the
> person operating the service is in the United States and reads the data from
> there. The storage is still in Seoul, and we are not moving it. What changed
> is that we no longer promise it can never move — we promise to ask you first.

---

## 8. How long

- Up to **one year** after the beta ends
- After that we keep only a form that cannot be traced to anyone (device token,
  nickname and comments removed), or delete it
- **If you ask us to delete it, we delete it immediately** (section 9)

---

## 9. Withdrawing consent and deletion

### In the app (immediate)

```
Settings (⚙) → Withdraw and delete my data
```

This deletes what reached our server, along with anything still waiting to be
sent. Sending stops and the app returns to the consent screen.

### By email

**bizforeverything@gmail.com** — we will find and delete your data. Telling us
your nickname or roughly when you sent it makes it faster.

### Other rights

You may request access, correction, deletion, or suspension of processing
(Korea's Personal Information Protection Act, articles 35–37). We respond
**within 10 days.**

---

## 10. How the beta reaches your phone

### iPhone — TestFlight

Beta distribution uses Apple's TestFlight. Apple **separately** collects
installation/session statistics and crash logs, and gives us aggregated data
only. Apple's policy applies —
[apple.com/legal/privacy](https://www.apple.com/legal/privacy/)

### Android — Firebase App Distribution

**Not in use yet — there is no Android build today.** When we start an Android
beta it will be delivered through Google's Firebase App Distribution, and this
is how that will work:

- To invite you, we would register **the email address you gave us** with the
  service.
  It is used only to deliver builds, never for anything else
- Google would **separately** collect installation and device statistics, and
  show us whether each tester has installed the latest build
- Google's policy applies —
  [firebase.google.com/support/privacy](https://firebase.google.com/support/privacy)

---

## 11. Children

Not directed at children under 14, and we do not knowingly collect their data.

---

## 12. Changes

If this changes we update this document, and **if the consent wording changes
the app asks you again.** (The app records which version of the wording you
agreed to.)

---
---

# 한국어

## 한 줄 요약

**측정 기록은 저희 서버로 자동 전송됩니다.** 그게 베타 참여의 내용입니다.
**닉네임과 의견은 직접 쓰실 때만** 전달됩니다.

---

## 1. 자동으로 전송되는 것

측정을 마칠 때마다 아래가 저희 서버로 전송됩니다.

| 항목 | 내용 |
|---|---|
| 측정값 | 주파수, 유지율, 누적 플레이 시간, 측정 시각, 계절 |
| 라켓 정보 | 제조사, 모델, 헤드 크기, 스트링 패턴 |
| 스트링 정보 | 브랜드, 모델, 게이지, 머신 텐션, 작업일 |
| 앱 버전 | 문제 재현용 |
| 진단값 | 스트링 정보를 몇 개 받아 뒀는지 등, 앱이 정상 동작하는지 보는 숫자 |
| 테스트 표시 | 개발자가 화면을 확인하며 만든 기록인지 여부. 분석에서 빼기 위한 것입니다 |
| **익명 기기 토큰** | 앱을 처음 켤 때 만드는 **임의의 숫자**. 3번 참고 |

계정도, 로그인도, 분석 도구(Analytics)도, 광고도, 추적도 없습니다.
**저희 서버 외에는 어디에도 보내지 않습니다.**

⚠️ 신호가 없는 실내 코트에서는 **기기 안에 보관하고 있다가 나중에** 보냅니다.
그동안 화면에는 아무것도 표시되지 않습니다.

### 왜 자동인가

누를 때만 받으면 **줄이 죽었다고 느낀 분만** 보내게 됩니다. 그러면
"언제 갈아야 하나"의 답이 처음부터 한쪽으로 기울어요. 정확한 앱을 만들려면
편향 없는 기록이 필요합니다.

동의하지 않으시면 베타에 참여하실 수 없습니다. **데이터를 모으는 것이
베타의 목적**이기 때문입니다. 정식 출시 버전에서는 필수와 선택을 나눌 예정입니다.

---

## 2. 마이크

스트링을 두드릴 때 나는 소리의 **주파수만** 잽니다.

- 소리는 **기기 안에서 실시간으로 분석**되고 즉시 버려집니다
- **녹음 파일을 만들지 않습니다.** 저장하지도, 전송하지도 않습니다
- 남는 것은 **숫자 하나(Hz)**뿐입니다

---

## 3. 익명 기기 토큰

앱을 처음 켤 때 만드는 임의의 숫자입니다. 예: `3f2a9c81-…`

- 기기 식별자가 **아닙니다** (UDID·광고 식별자 아님). 저희가 만들어 보관하는
  임의의 값이고, 휴대폰에 관한 정보는 하나도 들어가지 않습니다
- 회원님이 누구인지 알려주지 않습니다
- 휴대폰 키체인에 보관되어 **앱을 지웠다 다시 깔아도 유지됩니다**
- 이 휴대폰을 벗어나지 않고 iCloud로도 동기화되지 않습니다
- **언제든 지우실 수 있습니다**: 설정 → 동의 철회를 누르시면 데이터가 삭제되고
  토큰도 새로 발급됩니다

한 분의 측정을 순서대로 잇는 데 필요합니다. 이게 없으면 "세 시간 치고 나서
얼마나 빠졌나"를 계산할 수 없습니다.

> **2026-08-24 변경.** 예전에는 앱을 지우면 함께 사라졌습니다. 그런데 베타에서
> 한 사람이 네 번 재설치한 것이 **서로 다른 테스터 네 명**으로 잡혔고, 그러면
> 저희가 재려던 것 — 다른 휴대폰이 같은 줄을 같게 읽는지, 사람들이 다시 오는지 —
> 을 계산할 수 없게 됩니다. 앱 삭제로는 더 이상 지워지지 않으므로 위의
> 지우는 방법을 함께 만들었습니다.

---

## 4. 기기 안에만 있는 것

앱 전용 저장 공간에 파일로 있습니다. 다른 앱은 읽을 수 없습니다.

- 라켓·스트링·측정 기록 (1번과 같은 내용)
- 앱 설정 (테마, 언어, 기능 투표)
- 아직 못 보낸 전송 대기분
- 동의 이력 (언제·어떤 문구에 동의했는지)

**앱을 삭제하면 함께 지워집니다.**

---

## 5. 「피드백 보내기」를 누르면

이때만 **닉네임과 의견**이 함께 전달됩니다.

| 항목 | 내용 |
|---|---|
| 닉네임 | 직접 적으신 값. **실명일 필요 없습니다** |
| 주관 평가 | "줄이 죽은 느낌인가" 1~5, "지금이면 갈 것 같나" 예/아니오 |
| 자유 의견 | 쓰신 글 |
| 기능 투표 | "다음에 뭘 만들까요"에서 고른 항목 |

⚠️ **자유 의견과 닉네임에는 적으신 것이 그대로 들어갑니다.**
개인을 특정할 수 있는 내용은 적지 않기를 권합니다.

**주소록·위치·전화번호·기기 식별자는 어떤 경우에도 포함되지 않습니다.**

---

## 5b. 스트링어 모드를 쓰시는 경우

스트링어 모드는 남의 라켓을 걸어 주시는 분을 위한 것입니다. 라켓 한 대를
오래 따라가는 대신 **작업을 기록**합니다.

| 항목 | 내용 |
|---|---|
| 모드 | 이 폰이 「내 라켓」인지 「스트링어」인지 |
| 작업 한 건 | 작업한 날, 라켓 모델, 스트링과 게이지, 넣으신 작업 텐션, 직후에 잰 주파수 |

**메모 칸은 이 폰을 벗어나지 않습니다.** 라켓을 구분하시라고 둔 칸이고,
손님 이름이 들어갈 수 있는 유일한 자리입니다. 저희가 받는 것에 들어 있지
않습니다.

**손님에 대한 것은 묻지도 않고 받지도 않습니다** — 이름·전화번호·접수번호
어느 것도 해당합니다.

### 스트링어 본인에 대해, 한 번만

| 항목 | 내용 |
|---|---|
| 경력 | 줄을 매신 지 몇 년인지 (알려주신 경우) |
| 자격증 | 보유 여부와 어떤 자격인지 |
| 기계 | 락아웃 / 컨스턴트 풀 / 드롭웨이트, 그리고 모델명 |
| 접속 코드 | 스트링어 모드를 여실 때 쓰신 코드가 저희 코드 중 어느 것인지 |
| 샵 연결 | 관심 있다고 답하셨는지 — 예/아니오, 그 이상은 없습니다 |

같은 기계라도 작업하시는 분에 따라 텐션이 달라집니다. 이 정보가 있어야
**기계 몫과 사람 몫을 갈라낼 수 있습니다.** 이름·연락처·상호는 묻지
않습니다 — 그 목적에 필요 없고, 받는 순간 이 데이터의 성격이 바뀝니다.

**접속 코드에 대해.** 샵마다 다른 코드를 드립니다. 그래서 어느 샵의
측정인지 저희가 **상호를 갖고 있지 않아도** 갈라집니다. 어떤 코드를 어느
샵에 드렸는지는 저희 쪽 기록에만 있고, 앱에도 들어 있지 않으며 측정과 함께
보내지지도 않습니다. 그렇게 묶이는 것이 싫으시면 말씀해 주세요 — 아무것과도
이어지지 않은 코드를 새로 드립니다.

**샵 연결에 대해.** 나중에 손님과 샵을 이어 주는 것을 만들지 모릅니다. 앱의
질문은 **예/아니오만** 기록합니다. **그것 때문에 연락처를 받지 않습니다** —
그 프로젝트를 실제로 시작하게 되면 그때 따로, 무엇에 쓸지 먼저 말씀드리고
여쭙겠습니다.

전부 건너뛰셔도 작업 기록은 그대로 쓰실 수 있습니다.

### 보내기

작업은 저장하실 때마다 전송됩니다. 작업 목록의 **데이터 보내기**를 누르면
전체를 다시 보냅니다 — 몇 번이든 누르셔도 됩니다. 두 번 받는 편이 놓치는
것보다 낫습니다. 라켓은 이미 손님에게 돌아갔으니까요.

---

## 5c. 실험자 모드

실험용 코드를 받으신 분입니다 — 리그로 스트링 팩터를 재는 것을 도와주시는
경우입니다. 한 번 잴 때마다 스트링·길이·장력·주파수가 전송됩니다.
본인에 대한 정보는 함께 가지 않습니다.

---

## 6. 어디에 쓰나

| 목적 | 방법 |
|---|---|
| 텐션 계산 정확도 개선 | 스트링별 텐션 변화 분석 |
| 교체 시점 추천 기능 개발 | 플레이 시간 대비 유지율 회귀 |
| 무엇을 먼저 만들지 결정 | 기능 투표 |
| 새 기능 개발·개선 | 앱이 틀리거나 쓰기 어려운 지점 파악 |
| 스트링·라켓 기준 데이터 구축 | 누구 것인지 알 수 없는 통계 — 이 앱과 저희의 다른 테니스 기능에 사용 |

**광고·마케팅에 쓰지 않고, 제3자에게 판매하거나 제공하지 않습니다.**

마지막 줄은 **사람이 아니라 숫자**에 대한 것입니다. 어떤 스트링이 한 시간에
텐션을 얼마나 잃는지, 그게 라켓에 따라 어떻게 다른지 같은 것입니다. 통계가
되고 나면 그 값은 더 이상 회원님에 대해 아무것도 말하지 않고, 한 번도 재 본
적 없는 사람에게 "갈아야 하나"를 답해 줄 수 있게 하는 것이 바로 이 값입니다.

---

## 7. 어디에 보관하나

| | |
|---|---|
| 위치 | **대한민국 서울** (Amazon Web Services `ap-northeast-2`) |
| 수탁자 | Amazon Web Services — 클라우드 인프라 운영 |
| 접근할 수 있는 사람 | 운영자 본인뿐입니다. 운영자는 **미국(메릴랜드)에 거주**하며 그곳에서 열람합니다 |
| 국외 보관·처리 | 지금은 하지 않습니다. 하게 되면 **무엇을·어디로·누구에게·왜 옮기는지 미리 알려 드리고 다시 여쭙습니다.** 거부하실 수 있습니다 |

저장소는 **비공개**이며 외부에서 직접 접근할 수 없습니다.

> 이전 판에는 국외 이전이 **"없습니다. 데이터가 한국을 벗어나지 않습니다"** 라고
> 적혀 있었습니다. 영구적인 약속처럼 쓴 것인데, 그렇게 쓰지 말았어야 했습니다 —
> 서비스를 운영하는 사람이 미국에 있고 그곳에서 데이터를 열람하기 때문입니다.
> 저장 위치는 여전히 서울이고 옮길 계획도 없습니다. 달라진 것은 **"절대 옮기지
> 않는다"는 약속을 거두고, 옮기게 되면 먼저 여쭙겠다는 약속으로 바꾼 것**입니다.

---

## 8. 얼마나 보관하나

- 베타 종료 후 **1년**까지
- 그 뒤에는 **누구 것인지 알 수 없는 형태**(기기 토큰·닉네임·자유 의견 제거)로만
  남기거나 폐기합니다
- **삭제를 요청하시면 그 즉시** 지웁니다 (9번)

---

## 9. 동의 철회 · 삭제 요청

### 앱 안에서 (즉시)

```
설정(⚙) → 동의 철회 · 데이터 삭제
```

누르면 **서버에 보낸 기록이 지워지고**, 아직 못 보낸 것도 함께 사라집니다.
그 뒤로는 전송이 멈추고 앱은 동의 화면으로 돌아갑니다.

### 메일로

**bizforeverything@gmail.com** 으로 연락 주시면 찾아서 지워 드립니다.
닉네임이나 보낸 시각을 알려주시면 빠릅니다.

### 그 밖의 권리

열람·정정·삭제·처리정지를 요구하실 수 있습니다 (개인정보보호법 §35~37).
위 메일로 요청하시면 **10일 이내**에 처리하고 결과를 알려 드립니다.

---

## 10. 베타가 폰에 전달되는 경로

### iPhone — TestFlight

베타 배포는 Apple의 TestFlight로 합니다. Apple이 **별도로**
설치·실행 통계와 충돌 로그를 수집하며, 저희에게는 익명 집계로만 제공됩니다.
여기에는 Apple의 정책이 적용됩니다 —
[apple.com/legal/privacy](https://www.apple.com/legal/privacy/)

### 안드로이드 — Firebase App Distribution

**아직 쓰지 않습니다 — 현재 안드로이드 빌드가 없습니다.** 안드로이드 베타를
시작하게 되면 Google의 Firebase App Distribution으로 전달할 예정이고,
그때는 이렇게 됩니다:

- 초대를 위해 **알려주신 이메일 주소**를 이 서비스에 등록하게 됩니다.
  빌드 전달에만 쓰고 다른 용도로는 쓰지 않습니다
- Google이 **별도로** 설치·기기 통계를 수집하고, 저희에게는 테스터별로
  최신 빌드를 설치했는지가 표시됩니다
- 여기에는 Google의 정책이 적용됩니다 —
  [firebase.google.com/support/privacy](https://firebase.google.com/support/privacy)

---

## 11. 만 14세 미만

만 14세 미만을 대상으로 하지 않으며, 해당 연령의 정보를 알면서 수집하지 않습니다.

---

## 12. 변경

내용이 바뀌면 이 문서를 갱신하고, **동의 문구가 바뀌면 앱에서 다시 여쭙니다.**
(앱이 동의 문구의 판 번호를 기록해 두었다가, 판이 달라지면 다시 묻습니다.)

