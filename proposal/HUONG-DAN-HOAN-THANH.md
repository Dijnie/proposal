# HƯỚNG DẪN HOÀN THÀNH PROPOSAL

## Bước 1: Tìm và Thay Thế Placeholders

Mở file: `/home/tid/project/fun15/catalyst/cip68-proposal/proposal/fund15-proposal-draft.md`

### Tìm kiếm các từ khóa sau và thay thế:

#### 1. Team Information

**Tìm:** `[Team Member 1 - Smart Contract Developer]`
**Thay bằng:**
```
**[Tên Thật] - Smart Contract Developer**
- LinkedIn: https://linkedin.com/in/[your-profile]
- GitHub: https://github.com/[your-username]
- Experience: X years in Plutus/Cardano development
- Prior Projects: [Dự án Cardano đã làm]
- Responsibilities: Smart contract architecture, CIP68 implementation, security
```

**Tìm:** `[Team Member 2 - Backend Developer]`
**Thay bằng:** (tương tự như trên)

**Tìm:** `[Team Member 3 - Frontend Developer]`
**Thay bằng:** (tương tự như trên)

**Tìm:** `[Team Member 4 - DevOps Engineer]`
**Thay bằng:** (tương tự như trên)

**Tìm:** `[Team Member 5 - Technical Writer]`
**Thay bằng:** (tương tự như trên, hoặc ghi "To be recruited")

---

#### 2. Prototype Evidence

**Tìm:** `[Demo URL - PLACEHOLDER]`
**Thay bằng:** `https://demo.your-platform.io` hoặc testnet URL thật

**Tìm:** `[X users] [PLACEHOLDER]`
**Thay bằng:** Số users thật, ví dụ: `15 active users`

**Tìm:** `[Y NFTs minted] [PLACEHOLDER]`
**Thay bằng:** Số NFTs thật, ví dụ: `250 NFTs minted`

**Tìm:** `[GitHub Repository URL - PLACEHOLDER]`
**Thay bằng:** `https://github.com/your-org/cip68-platform`

**Tìm:** `[User testimonials - PLACEHOLDER]`
**Thay bằng:**
```
"The CIP68 platform saved us 3 weeks of development time for our event ticketing system."
- John Doe, CTO at EventChain

"Easy to integrate and well-documented. Our university certificates are now dynamic NFTs."
- Dr. Jane Smith, Blockchain Lead at University XYZ
```

---

#### 3. Supporting Links

**Tìm:** `[LinkedIn URL - PLACEHOLDER]`
**Thay bằng:** LinkedIn URLs thật của từng team member

**Tìm:** `[Email - PLACEHOLDER]`
**Thay bằng:** Email liên hệ, ví dụ: `contact@cip68platform.io`

**Tìm:** `[Demo video - PLACEHOLDER]`
**Thay bằng:** `https://youtube.com/watch?v=[your-video-id]`

**Tìm:** `https://app.cip68platform.io [PLACEHOLDER: Adjust domain]`
**Thay bằng:** Domain thật hoặc xóa `[PLACEHOLDER...]`

---

## Bước 2: Xác Nhận Character Limits

Proposal đã check sẵn, nhưng hãy verify lần cuối:

```bash
# Check title length (≤60 chars)
grep "^# " fund15-proposal-draft.md | head -1 | wc -m

# Tìm Problem Statement và đếm ký tự (≤200 chars)
# Tìm Solution Overview và đếm ký tự (≤200 chars)
```

---

## Bước 3: Tạo Demo Video (Nếu Chưa Có)

**Yêu cầu:**
- Thời lượng: 5-10 phút
- Nội dung:
  1. Giới thiệu team (30s)
  2. Demo no-code dashboard (2-3 phút)
  3. Demo API/SDK integration (2-3 phút)
  4. Showcase use cases (tickets/certs/memberships) (2-3 phút)
  5. Roadmap và impact (1 phút)
- Upload: YouTube (public) hoặc Vimeo
- Thêm URL vào proposal

---

## Bước 4: Collect Team LinkedIn

**Yêu cầu:**
- Public profiles (không private)
- Có experience về Cardano/blockchain
- Có ảnh đại diện professional
- Summary phải mention blockchain experience

**Checklist mỗi profile:**
- [ ] URL format: `https://linkedin.com/in/[username]`
- [ ] Profile public
- [ ] Có blockchain experience listed
- [ ] Có ảnh và summary

---

## Bước 5: Prepare GitHub Evidence

**Yêu cầu:**
- Repository public (hoặc plan khi nào open-source)
- Có commit history (không empty repo)
- Có README.md cơ bản
- Có license file (recommend: Apache 2.0)

**Nếu repo chưa public:**
Ghi trong proposal:
```
Repository will be open-sourced at Milestone 2 under Apache 2.0 license.
Current development visible to Catalyst reviewers upon request.
```

---

## Bước 6: Final Review Checklist

Trước khi submit, check:

- [ ] Tất cả `[PLACEHOLDER` đã được thay thế
- [ ] Team member names đều có LinkedIn URLs
- [ ] Prototype evidence có URL và metrics thật
- [ ] Demo video đã upload và link working
- [ ] Email contact đã điền
- [ ] GitHub repos accessible
- [ ] Character limits: Title ≤60, Problem/Solution ≤200
- [ ] Budget total = ₳127,500 (sum of all milestones)
- [ ] Timeline = 7 months
- [ ] 6 milestones (5 + final)

---

## Bước 7: Submit to Catalyst

**Deadline:** Trước ngày voting (Jan 13-27, 2026)

**Nơi submit:**
- Website: https://projectcatalyst.io
- Hoặc platform mới của Catalyst Fund15

**Trước khi submit:**
1. Save proposal draft locally
2. Copy toàn bộ nội dung từ `fund15-proposal-draft.md`
3. Paste vào Catalyst submission form
4. Upload supporting documents nếu có
5. Preview trước khi submit final
6. Submit và save confirmation

---

## ⏰ Timeline Đề Xuất:

**Tuần 1-2:** Complete team credentials, create demo video, gather prototype metrics
**Tuần 3:** Post to Cardano forum/Discord for community feedback
**Tuần 4:** Incorporate feedback, final polish
**Submit:** 2-4 tuần trước voting để community review

---

## 🆘 Nếu Thiếu Information:

### Nếu chưa có working prototype:
Thay đổi từ "working prototype" thành "proof-of-concept" và adjust milestones

### Nếu chưa có full team:
Mark positions as "To be recruited" và add recruitment plan trong budget

### Nếu chưa có demo URL:
Ghi "Will be deployed at Milestone 1" và provide roadmap

---

## 📊 Success Metrics After Submission:

- Community engagement trên forum
- Upvotes/comments từ voters
- Questions từ reviewers (respond nhanh)
- AMA sessions trước voting

---

**Chúc may mắn với Fund15!** 🚀
