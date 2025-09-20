This project creates a **cybersecurity awareness testing and training system** that works like a honeypot to evaluate how vulnerable people are to common cyber threats. Here's what it actually does:

## Core Functionality

### 1. **Simulates a Fake E-commerce Website**
The project sets up a realistic-looking online shopping website that serves as bait to test users' cybersecurity awareness. It's deliberately designed with various security traps and vulnerabilities.

### 2. **Tests Users Against Real Cyber Threats**
When users interact with the site, they encounter 8 different cyber threat scenarios:
- Fake browser extension popups asking for installation
- Phishing pages that look like Gmail login
- Requests for camera/microphone permissions
- A chatbot that tries to extract personal information
- Malicious download links
- Auto-downloading files (simulating malware)
- Suspicious payment methods (Bitcoin/PayPal instead of standard options)
- Requests to upload personal photos

### 3. **Tracks Every User Action**
Using Google Tag Manager and Analytics, the system records:
- Which threats users fell for
- Which security warnings they ignored
- What personal information they were willing to share
- Whether they entered passwords on fake login pages
- If they accepted dangerous permissions

### 4. **Generates Individual Risk Assessments**
The system creates detailed reports showing:
- Each user's cybersecurity awareness level
- Specific vulnerabilities they demonstrated
- Risk categorization (Low/Medium/High)
- Areas where they need security training

## Practical Application

This tool would typically be used by:
- **Organizations** to test their employees' security awareness
- **Educational institutions** for cybersecurity training
- **Security teams** to identify vulnerable users who need additional training

For example, if a company deploys this, they can see that Employee A fell for the phishing page and entered their password, while Employee B recognized all the threats. The company then knows Employee A needs immediate security training while Employee B has good awareness.

## The Clever Part

The project essentially tricks users into revealing their cybersecurity weaknesses in a controlled environment, then uses that data to provide targeted training - preventing them from falling for real attacks in the future. It's like a fire drill for cybersecurity.
