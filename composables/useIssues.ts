import { faker } from "@faker-js/faker"
import { get } from "@vueuse/core";

const issues = [
  {
    label: 'Order Issues',
    value: 'order-issues',
    type: 'issue',
    category: 'order',
    subCases: [
      {
        label: 'I did not receive my order',
        value: 'did-not-receive-order',
        type: 'issue',
        category: 'order',
        nextProcess: 'load-order-list'
      },
      {
        label: 'I want to cancel my order',
        value: 'cancel-order',
        type: 'issue',
        category: 'order',
        nextProcess: 'load-order-list'
      },
      {
        label: 'I want to return my order',
        value: 'return-order',
        type: 'issue',
        category: 'order',
        nextProcess: 'load-order-list'
      },
      {
        label: 'I received a wrong item',
        value: 'wrong-item',
        type: 'issue',
        category: 'order',
        nextProcess: 'load-order-list'
      },
      {
        label: 'I received a damaged item',
        value: 'damaged-item',
        type: 'issue',
        category: 'order',
        nextProcess: 'load-order-list'
      },
      {
        label: 'Other',
        value: 'other-order-issue',
        type: 'issue',
        category: 'order',
        nextProcess: 'load-order-list'
      }
    ]
  },
  {
    label: 'Payment Issues',
    value: 'payment-issues',
    type: 'issue',
    category: 'payment',
    subCases: [
      {
        label: 'Payment failed',
        value: 'payment-failed',
        type: 'issue',
        category: 'payment',
      },
      {
        label: 'Refund request',
        value: 'refund-request',
        type: 'issue',
        category: 'payment',
      },
      {
        label: 'Other',
        value: 'other-payment-issue',
        type: 'issue',
        category: 'payment',
      }
    ]
  },
  {
    label: 'Account Issues',
    value: 'account-issues',
    type: 'issue',
    category: 'account',
    subCases: [
      {
        label: 'I forgot my password',
        value: 'forgot-password',
        type: 'issue',
        category: 'account',
      },
      {
        label: 'I want to update my account information',
        value: 'update-account-info',
        type: 'issue',
        category: 'account',
      },
      {
        label: 'Other',
        value: 'other-account-issue',
        type: 'issue',
        category: 'account',
      }
    ]
  },
  {
    label: 'Shipping Issues',
    value: 'shipping-issues',
    type: 'issue',
    category: 'shipping',
    subCases: [
      {
        label: 'I want to track my order',
        value: 'track-order',
        type: 'issue',
        category: 'shipping',
      },
      {
        label: 'I want to change my shipping address',
        value: 'change-shipping-address',
        type: 'issue',
        category: 'shipping',
      },
      {
        label: 'Other',
        value: 'other-shipping-issue',
        type: 'issue',
        category: 'shipping',
      }
    ]
  }
];

export const useIssues = () => {
  const getMainIssues = () => {
    return issues.map(issue => ({
      label: issue.label,
      value: issue.value,
      type: issue.type,
      category: issue.category,
    }))
  }

  const getSubIssues = (issue: string) => {
    const mainIssue = issues.find(item => item.value === issue)
    if (!mainIssue) return []
    return mainIssue.subCases;
  }


  return {
    issues,
    getMainIssues,
    getSubIssues
  }
}