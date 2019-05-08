import {
  fullDate, effDate, dashPositionNumber, shortFullDate,
  shortDate, warrantData, isInteger, dashUeid, autoDashUEID, autoDashSSN
} from '../commonMethods/formatData';

// Chai - { assert, expect, should }
const { expect } = require('chai');

describe('Common Methods: Format Data - Unit Tests', () => {
  /** Tests for fullDate - 01061995 */
  describe('fullDate() Tests', () => {
    const badDate = '0112'; // MM/DD
    const goodDate = '19950130';
    
    // 'date' < length of '8'
    it('should return bad date if less than length of 8', () => {
      const result = fullDate(badDate);
      expect(result).to.equal(badDate);
    });

    it('should return formatted date of YYYY/MM/DD', () => {
      const result = fullDate(goodDate);
      expect(result).to.equal('1995/01/30');
    });
  });
  /** Tests for effDate */
  describe('effDate() Tests', () => {
    const badDate = '0112'; // MM/DD
    const goodDate = '01301995';
    
    // 'date' < length of '8'
    it('should return bad date if less than length of 8', () => {
      const result = effDate(badDate);
      expect(result).to.equal(badDate);
    });

    it('should return formatted date of MM/DD/YYYY', () => {
      const result = effDate(goodDate);
      expect(result).to.equal('01/30/1995');
    });
  });
  /** dashPositionNumber: ###-###-####-### */
  describe('dashPositionNumber() Tests', () => {
    const badPosNum = '123456';
    const goodPosNum = '1234561234777';
    
    // 'date' < length of '8'
    it('should return bad date if less than length of 8', () => {
      const result = dashPositionNumber(badPosNum);
      expect(result).to.equal(badPosNum);
    });

    it('should return formatted Position # of ###-###-####-###', () => {
      const result = dashPositionNumber(goodPosNum);
      expect(result).to.equal('123-456-1234-777');
    });
  });
  /** shortFullDate - MM/DD/YYYY */
  describe('shortFullDate() Tests', () => {
    const badDate = '0112'; // MM/DD
    const badDate2 = '01121995'
    const goodDate = '013095';
    
    // 'date' < length of '6'
    it('should return bad date if less/more than length of 8', () => {
      const result1 = shortFullDate(badDate);
      const result2 = shortFullDate(badDate2);

      expect(result1).to.equal(badDate);
      expect(result2).to.equal(badDate2);
    });

    it('should return formatted date of MM/DD/YYYY', () => {
      const result = shortFullDate(goodDate);
      expect(result).to.equal('01/30/95');
    });
  });
  /** Tests for shortDate: 'YYYY/MM' or 'MM/YY' or 'MM/DD' */
  describe('shortDate() Tests', () => {
    /** Bad Dates */
    const badDate1 = '01125';
    const badDate2 = '01121995';
    /** Good Dates */
    const goodDate_MMYY = '0195'; // 'MM/YY'
    const goodsDate_MMDD = '0112';  // 'MM/DD'
    const goodFullDate = '199501'; // 'YYYY/MM'
    
    // 'date' < length of '8'
    it('should return bad date if not length of 6 or 4', () => {
      const result1 = shortDate(badDate1);
      const result2 = shortDate(badDate2);

      expect(result1).to.equal(badDate1);
      expect(result2).to.equal(badDate2);
    });

    it('should return formatted short date of MM/YY or MM/DD', () => {
      const result1 = shortDate(goodDate_MMYY);
      const result2 = shortDate(goodsDate_MMDD);

      expect(result1).to.equal('01/95');
      expect(result2).to.equal('01/12');
    });

    it('should return formatted full date of YYYY/MM', () => {
      const result = shortDate(goodFullDate);
      expect(result).to.equal('1995/01');
    });
  });
  /** Tests for WarrantData */
  describe('warrantData() Tests', () => {
    const badWarrant1 = '01';
    const badWarrant2 = '017776969';
    const goodWarrant = '03777888';
    
    // 'date' < length of '8'
    it('should return back same warrant number if it not right format - length of 8', () => {
      const result1 = warrantData(badWarrant1);
      const result2 = warrantData(badWarrant2);

      expect(result1).to.equal(badWarrant1);
      expect(result2).to.equal(badWarrant2);
    });

    it('should return formatted warrantData of ##-######', () => {
      const result = warrantData(goodWarrant);
      expect(result).to.equal('03-777888');
    });
  });
    /** Tests for isInteger: used for Date */
  describe('isInteger() Tests', () => {
    const numStr = '0112'; // MM/DD
    const nonNumStr = '@#$@asdf';
    
    // 'date' < length of '8'
    it('should return true for a non-numerical excluding dash', () => {
      const result = isInteger(nonNumStr);
      expect(result).to.be.false;
    });

    it('should return true for user-input of a dash', () => {
      const result = isInteger('-');
      expect(result).to.be.true;
    });

    it('should return false for a numerical string', () => {
      const result = isInteger(numStr);
      expect(result).to.be.true;
    });
  });
    /** Tests for dashUeid */
  describe('dashUeid() Tests', () => {
    const badShortUEID = '1234'; // MM/DD
    const badLongUEID = '1234567899'; // MM/DD
    const goodUEID = '123456789';
    
    // 'ueid' < length of '9'
    it('should return bad ueid for numerical string less/greater than 9', () => {
      const result1 = dashUeid(badShortUEID);
      const result2 = dashUeid(badLongUEID);

      expect(result1).to.equal(badShortUEID);
      expect(result2).to.equal(badLongUEID);      
    });

    it('should return formatted ueid for length of exactly 9', () => {
      const result = dashUeid(goodUEID);
      expect(result).to.equal('1234-5678-9');
    });
  });
  /**
   * Auto-Hyphen: UEID and SSN
   */
  describe('Auto-hyphening of ueid and ssn Tests', () => {
    /** UEID */
    const noDash = '1234'; // MM/DD
    const singleDash = '123456'; // MM/DD
    const doubleDash = '123456789';
    /** SSN */
    const noDashSSN = '123'; // MM/DD
    const singleDashSSN = '12345'; // MM/DD
    const doubleDashSSN = '123457777';

    /** UEID */
    it('should return ueid with no dashes for a length of <= 4', () => {
      const result = autoDashUEID(noDash);
      expect(result).to.equal(noDash);
    });
    it('should return a single ueid for 123456', () => {
      const singleDashresult = autoDashUEID(singleDash);
      expect(singleDashresult).to.equal('1234-56');
    });
    it('should return a double ueid for ueid of length 9', () => {
      const doubleDashresult = autoDashUEID(doubleDash);
      expect(doubleDashresult).to.equal('1234-5678-9');
    });

    /** SSN */
    it('should return ssn with no dashes for a length of <= 4', () => {
      const result = autoDashSSN(noDashSSN);
      expect(result).to.equal(noDashSSN);
    });
    it('should return a single ssn for 123456', () => {
      const singleDashresult = autoDashSSN(singleDashSSN);
      expect(singleDashresult).to.equal('123-45');
    });
    it('should return a double ssn for ueid of length 9', () => {
      const doubleDashresult = autoDashSSN(doubleDashSSN);
      expect(doubleDashresult).to.equal('123-45-7777');
    });
  });
});