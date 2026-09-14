export interface Certification {
  title: string
  issuer: string
  code: string
  date?: string
  credentialUrl?: string
  badgeImage?: string
  upcoming?: boolean
}

export const certifications: Certification[] = [
  {
    title: 'NVIDIA-Certified Associate: AI Infrastructure & Operations',
    issuer: 'NVIDIA',
    code: 'NCA-AIIO',
    badgeImage: '/certifications/nvidia-nca-aiio.png',
    upcoming: true,
  },
  {
    title: 'Certified Kubernetes Administrator',
    issuer: 'CNCF · Linux Foundation',
    code: 'CKA',
    badgeImage: '/certifications/cka.png',
    upcoming: true,
  },
  {
    title: 'Azure DevOps Engineer Expert',
    issuer: 'Microsoft',
    code: 'AZ-400',
    credentialUrl:
      'https://learn.microsoft.com/api/credentials/share/en-us/AzizullahKhan-9488/E53BB4BE5227FAC1?sharingId=6AD63B45F8BE8A2E',
    badgeImage: '/certifications/az-400.png',
  },
  {
    title: 'Azure Developer Associate',
    issuer: 'Microsoft',
    code: 'AZ-204',
    credentialUrl:
      'https://learn.microsoft.com/api/credentials/share/en-us/AzizullahKhan-9488/7774B79D87D2F687?sharingId=6AD63B45F8BE8A2E',
    badgeImage: '/certifications/az-204.png',
  },
  {
    title: 'Azure Virtual Desktop Specialty',
    issuer: 'Microsoft',
    code: 'AZ-140',
    credentialUrl:
      'https://learn.microsoft.com/api/credentials/share/en-us/AzizullahKhan-9488/233A221947F1DAB8?sharingId=6AD63B45F8BE8A2E',
    badgeImage: '/certifications/az-140.png',
  },
  {
    title: 'Fundamentals of Accelerated Computing with CUDA (Python)',
    issuer: 'NVIDIA DLI',
    code: 'CUDA',
    credentialUrl: 'https://learn.nvidia.com/certificates?id=zj8SOAEST5yVqMnOPg_rCA',
    badgeImage: '/certifications/nvidia-cuda.png',
  },
  {
    title: 'Azure Fundamentals',
    issuer: 'Microsoft',
    code: 'AZ-900',
    credentialUrl:
      'https://learn.microsoft.com/api/credentials/share/en-us/AzizullahKhan-9488/FCAFC764D90438E2?sharingId=6AD63B45F8BE8A2E',
    badgeImage: '/certifications/az-900.png',
  },
]
