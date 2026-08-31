export interface Certification {
  title: string
  issuer: string
  date?: string
  credentialUrl?: string
}

export const certifications: Certification[] = [
  {
    title: 'AZ-400: DevOps Engineer Expert',
    issuer: 'Microsoft Azure',
    credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/AzizullahKhan-9488/E53BB4BE5227FAC1?sharingId=6AD63B45F8BE8A2E',
  },
  {
    title: 'AZ-204: Azure Developer Associate',
    issuer: 'Microsoft Azure',
    credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/AzizullahKhan-9488/7774B79D87D2F687?sharingId=6AD63B45F8BE8A2E',
  },
  {
    title: 'AZ-140: Azure Virtual Desktop Specialty',
    issuer: 'Microsoft Azure',
    credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/AzizullahKhan-9488/233A221947F1DAB8?sharingId=6AD63B45F8BE8A2E',
  },
  {
    title: 'AZ-900: Azure Fundamentals',
    issuer: 'Microsoft Azure',
    credentialUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/AzizullahKhan-9488/FCAFC764D90438E2?sharingId=6AD63B45F8BE8A2E',
  },
  {
    title: 'Fundamentals of Accelerated Computing with CUDA Python',
    issuer: 'NVIDIA',
  },
]
