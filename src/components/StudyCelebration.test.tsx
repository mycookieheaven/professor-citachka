import {act,cleanup,render,screen} from '@testing-library/react';
import {afterEach,beforeEach,expect,it,vi} from 'vitest';
import {StudyCelebration} from './StudyCelebration';
import {recordPosition,recordStudy,recordAssessment} from '@/lib/study-store';
import {courseAssessments} from '@/lib/assessments';
import {getProgram} from '@/lib/programs';
beforeEach(()=>{localStorage.clear();vi.useFakeTimers();});
afterEach(()=>{cleanup();vi.useRealTimers();vi.restoreAllMocks();});
it('celebrates only real saved learning, not visits, and removes its bounded burst',()=>{
 render(<StudyCelebration/>);expect(screen.queryByText('Progress saved. One more step forward.')).not.toBeInTheDocument();
 act(()=>recordPosition('russian','01'));expect(document.querySelector('.study-celebration')).toBeNull();
 act(()=>recordStudy('russian','01','02'));expect(screen.getByText('Progress saved. One more step forward.')).toBeInTheDocument();expect(document.querySelectorAll('.celebration-petal')).toHaveLength(12);
 act(()=>vi.advanceTimersByTime(2600));expect(document.querySelector('.study-celebration')).toBeNull();
 act(()=>recordStudy('russian','01','02'));expect(screen.getByText('Review saved. Keeping the idea fresh.')).toBeInTheDocument();
});
it('distinguishes an assessment result from a reading save and celebrates only a passed assessment',()=>{render(<StudyCelebration/>);const assessment=courseAssessments(getProgram('russian')!)[0];act(()=>recordAssessment('russian',assessment,{}));expect(screen.getByText('Assessment saved. Your feedback is ready.')).toBeInTheDocument();expect(document.querySelectorAll('.celebration-petal')).toHaveLength(0);act(()=>recordAssessment('russian',assessment,Object.fromEntries(assessment.questions.map(q=>[q.id,q.answer]))));expect(screen.getByText('Assessment passed. Result saved.')).toBeInTheDocument();expect(document.querySelectorAll('.celebration-petal')).toHaveLength(12);});
it('does not announce a durable save when storage is blocked',()=>{render(<StudyCelebration/>);vi.spyOn(localStorage,'setItem').mockImplementation(()=>{throw Error('blocked');});act(()=>recordStudy('finance','01','02'));expect(document.querySelector('.study-celebration')).toBeNull();});
